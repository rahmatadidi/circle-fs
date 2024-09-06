import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import AuthController from "./src/controllers/auth";
import ThreadController from "./src/controllers/threads";
import { upload } from "./src/middlewares/upload-file";
import { authenticate } from "./src/middlewares/authenticate";
dotenv.config();

const app: Express = express();
const port = 4000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);
app.use("/uploads", express.static("uploads"));

router.get("/card", authenticate, ThreadController.find);
// router.get("/card", authenticate, ThreadController.find);
router.get("/card/:id", authenticate, ThreadController.findOne);
router.post(
  "/card",
  authenticate,
  upload.single("image"),
  ThreadController.post
);
router.delete("/card/:id", authenticate, ThreadController.delete);
router.patch("/card/:id", authenticate, ThreadController.update);

router.post("/auth/login", AuthController.login);
router.post("/auth/register", AuthController.register);
// router.post("/auth/check", authenticate, AuthController.check);

//Get All
// async (req: Request, res: Response) => {
//   try {
//     const threads = await prisma.threads.findMany();
//     res.json(threads);
//   } catch (error) {
//     res.json({
//       message: error,
//     });
//   }
// };

//Get:id
// async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     // console.log("id", idThreads);
//     const threads = await prisma.threads.findFirst({
//       where: { idThreads: Number(id) },
//     });
//     res.json(threads);
//   } catch (error) {
//     res.json({ message: error });
//   }
// };

//Patch
//  async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const dto = req.body as CreateDTO;
//     const threads = await prisma.threads.findFirst({
//       where: { idThreads: Number(id) },
//     });
//     if (!threads) return res.status(500).json({ message: "Thread not found!" });

//     if (dto.content) {
//       threads.content = dto.content;
//     }
//     if (dto.image) {
//       threads.image = dto.image;
//     }
//     if (dto.numberOfReplies) {
//       threads.numberOfReplies = dto.numberOfReplies;
//     }
//     const updateThread = await prisma.threads.update({
//       where: { idThreads: Number(id) },
//       data: { ...threads },
//     });
//     res.json(updateThread);
//   } catch (error) {
//     res.json({
//       message: error,
//     });
//   }
// });

//delete
//  async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const threads = await prisma.threads.count({
//       where: { idThreads: Number(id) },
//     });
//     if (!threads) return res.status(500).json({ message: "Thread not found!" });

//     const deleted = await prisma.threads.delete({
//       where: { idThreads: Number(id) },
//     });
//     res.json(deleted);
//   } catch (error) {
//     res.json({
//       message: error,
//     });
//   }
// });

//Post
//  async (req: Request, res: Response) => {
//   try {
//     const dto = req.body as CreateDTO;
// const validate = createSchema.validate(dto);
// if (validate.error) {
//   return validate.error;
// }
//     const thread = await prisma.threads.create({
//       data: { ...dto },
//     });
//     res.json(thread);
//   } catch (error) {
//     res.json({
//       message: error,
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Server Berjalan di Port ${port}`);
});
