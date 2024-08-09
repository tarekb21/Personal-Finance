import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://tarektbouhairi:jl6dW5q3L5hJns3z@personalfinancetracker.n1cbk5e.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then( () => console.log("CONNECTED TO MONGODB"))
    .catch((err) => console.error("Failed to connect to MongoDB:",err))


app.use("/financial-records", financialRecordRouter)
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
})
