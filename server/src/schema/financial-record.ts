import mongoose from "mongoose";

interface FinancialRecord{
    userId: string;
    date: Date;
    
}

const financialRecordSchema = new mongoose.Schema<>({

})