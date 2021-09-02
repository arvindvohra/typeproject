import { Router } from "express";
import postcontroller from "../controllers/postController";


const router = Router();

router.post('/post', postcontroller.postpost);
router.get('/post', postcontroller.getpost);
router.get('/post/:id', postcontroller.findid);
router.delete('/delete/:id', postcontroller.deleterec);

router.put('/post/:id', postcontroller.updatepost);

export default router;