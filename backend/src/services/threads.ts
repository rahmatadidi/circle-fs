import { PrismaClient } from "@prisma/client";
import { CreateDTO, updateDTO } from "../dto/dto";
import { createSchema } from "../validator/thread";
import { v2 } from "cloudinary";

class ThreadService {
  private readonly prisma = new PrismaClient();

  async find() {
    try {
      const threads = await this.prisma.threads.findMany();
      return threads;
    } catch (error) {
      throw new Error(`Failed to fetch threads`);
    }
  }
  async findOne({ id }: { id: number }) {
    try {
      return await this.prisma.threads.findFirst({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to fetch threads`);
    }
  }
  async post(dto: CreateDTO) {
    try {
      const validate = createSchema.validate(dto);
      if (validate.error) {
        return validate.error;
      }
      v2.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      });
      const upload = await v2.uploader.upload(dto.image, {
        upload_preset: "MyCircle",
      });

      return await this.prisma.threads.create({
        data: { ...dto, image: upload.secure_url },
      });
    } catch (error) {
      throw new Error(`Failed to fetch threads`);
    }
  }
  async delete(id: number) {
    try {
      return await this.prisma.threads.delete({
        where: { id: Number(id) },
      });
    } catch (error) {
      throw new Error(`Failed to fetch threads`);
    }
  }
  async update(id: number, dto: updateDTO) {
    try {
      const threads = await this.prisma.threads.findFirst({
        where: { id: Number(id) },
      });
      if (!threads) return { message: "Thread not found!" };

      if (dto.content) {
        threads.content = dto.content;
      }
      if (dto.image) {
        threads.image = dto.image;
      }
      if (dto.numberOfReplies) {
        threads.numberOfReplies = dto.numberOfReplies;
      }
      return await this.prisma.threads.update({
        where: { id: Number(id) },
        data: { ...threads },
      });
    } catch (error) {
      throw new Error(`Failed to update thread`);
    }
  }
}

export default new ThreadService();
