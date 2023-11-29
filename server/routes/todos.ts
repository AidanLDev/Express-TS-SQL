import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/all', (req: Request, res: Response) => {
  res.json('All the TODOS');
});

export default router;
