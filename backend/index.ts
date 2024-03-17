import app from "./app";
import { connect } from "mongoose";
import { BACKEND_PORT, MONGO_URL } from "./src/constants";

async function connectToDatabase() {
  try {
    await connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

connectToDatabase();

app.listen(BACKEND_PORT, () => {
  console.log(`Backend server running at http://localhost:${BACKEND_PORT}`);
});
