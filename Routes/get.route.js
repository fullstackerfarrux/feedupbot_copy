import { Router } from "express";
import get from "../Ctr/get.ctr.js";

const {
  getburger,
  getkombo,
  getsendvich,
  getpizza,
  getnapitka,
  getlonger,
  getsneki,
  getsous,
  getvafli,
} = get;

const router = Router();

router.get("/getburger", getburger);
router.get("/getkombo", getkombo);
router.get("/getsendvich", getsendvich);
router.get("/getpizza", getpizza);
router.get("/getnapitka", getnapitka);
router.get("/getlonger", getlonger);
router.get("/getsneki", getsneki);
router.get("/getsous", getsous);
router.get("/getvafli", getvafli);

export default router;
