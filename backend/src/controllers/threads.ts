import { Request, Response } from "express";
import ThreadService from "../services/threads";

class ThreadController {
  private readonly threadService = ThreadService;
  async find(req: Request, res: Response) {
    try {
      const thread = await ThreadService.find();
      res.json(thread);
    } catch (error) {
      res.status(500).json({ message: "Thread Not Found" });
    }
  }
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const thread = await ThreadService.findOne({
        id: Number(id),
      });
      res.json(thread);
    } catch (error) {
      res.status(500).json({ message: "Thread Not Found" });
    }
  }
  async post(req: Request, res: Response) {
    try {
      const body = { ...req.body, image: req.file ? req.file.path : "" };
      const create = await ThreadService.post(body);
      res.json(create);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const thread = await ThreadService.delete(Number(id));
      res.json(thread);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // const threads = await ThreadService.findOne(Number(id));
      const thread = await this.threadService.update(Number(id), req.body);
      res.json(thread);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
export default new ThreadController();
