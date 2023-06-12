import express, { Request, Response} from 'express';
import cors from 'cors';
import { brandRouter } from './router/BrandRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

app.use("/brands", brandRouter)