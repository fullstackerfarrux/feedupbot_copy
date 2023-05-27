import { Router } from "express";
import getlavash from "../Ctr/lavash.ctr.js";

const { getlavashs } = getlavash;

const router = Router();

router.get("/getlavashs", getlavashs);

export default router;
