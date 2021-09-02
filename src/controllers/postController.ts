import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";


class postcontroller{
    static postpost = async (req:Request, res: Response) => {
        const newpost = {
            title : req.body.title,
            content : req.body.content,
        };
        const post = getRepository(Post).create(newpost);
        const result = await getRepository(Post).save(post);
        return res.json(result);
    };

    static getpost = async (req: Request, res: Response) =>{
        const result = await getRepository(Post).find();
        return res.json(result);
    };

    static findid = async (req: Request, res: Response) =>{
        var id = req.params.id;
        const resvalue = await getRepository(Post).findOne(id);
        return res.json(resvalue);
    };

    static deleterec = async (req, res) => {
        var id = req.params.id;
        await getRepository(Post).delete(id);
        return res.json('data delete');
    };

    static updatepost = async (req: Request, res: Response) => {
        let update = await getRepository(Post).findOne(req.params.id);
        if(update)
        {
            getRepository(Post).merge(update, req.body);
            const result = await getRepository(Post).save(update);
            return res.json(result);
        }
        else{
            return res.json({msg: "Data not found"});
        }
    }

}

export default postcontroller;