import express from "express";
import { getLogs, postLogs, healthCheck } from "./src/handlers";
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // You can add other headers as needed
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

router.get("/health", healthCheck);
router.get("/", getLogs);
router.post("/", postLogs);

app.use("/qlogger", router);

export default app;
