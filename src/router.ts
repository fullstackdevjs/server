import { deleteCopy, myCopies, saveCopy, generateCopy } from './meisyai.service';
import { Router } from "express";

export const router = Router()

router.get('/copys', myCopies)
router.post('/copys', saveCopy)
router.delete('/copys/:_id', deleteCopy)
router.post('/generate/copy', generateCopy)