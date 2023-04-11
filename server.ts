import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
