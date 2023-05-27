import { Router } from "express";
import get from "../Ctr/get.ctr.js";

const { getburger, getkombo, getsendvich } = get;

const router = Router();

router.get("/getburger", getburger);
router.get("/getkombo", getkombo);
router.get("/getsendvich", getsendvich);

export default router;
