import { Router, Request, Response } from "express";

const router = Router();

router.get('/hello', (req: Request, res: Response) => {
  res.send('its work!')
})
export default router;