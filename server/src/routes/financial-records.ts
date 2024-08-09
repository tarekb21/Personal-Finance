import express , {Request, Response} from 'express';
import FinancialRecordModel from '../schema/financial-record';


const router = express.Router();

router.get("/getAllByUserID")

export default router;