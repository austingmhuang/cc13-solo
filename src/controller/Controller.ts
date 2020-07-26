import {Request, Response} from 'express';
import connection from "../database";
import GuildMember from "../entity/GuildMember";
import Skill from "../entity/Skill";
import {getManager} from "typeorm";

class Controller {
    constructor() {}
    public async addMember(req: Request, res: Response) {
        // get a post repository to perform operations with post
        const guildMemberRepo = getManager().getRepository(GuildMember);

        // create a real post object from post json object sent over http
        const newPost = guildMemberRepo.create(req.body);

        // save received post
        await guildMemberRepo.save(newPost);

        // return saved post back
        res.send(newPost);
    }

    public async getById(req: Request, res: Response) {
    // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(GuildMember);

        // load a post by a given post id
        const post = await postRepository.findOne(req.params.id);

        // if post was not found return 404 to the client
        if (!post) {
            res.status(404);
            res.end();
            return;
        }

        // return loaded post
        res.send(post);
    }

    public async getAllMembers(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(GuildMember);
    
        // load a post by a given post id
        const posts = await postRepository.find();
    
        // return loaded posts
        response.send(posts);
    };
    
    public async deleteMember(req: Request, res: Response){
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(GuildMember);
    
        // load a post by a given post id
        const posts = await postRepository.delete(req.params.id);
    
        // return loaded posts
        res.send(posts);
    };

    public async updateMember(req: Request, res: Response){
        // get a post repository to perform operations with post
        const postRepository = getManager().getRepository(GuildMember);
    
        // load a post by a given post id
        const posts = await postRepository.update(req.params.name, req.body.name);
    
        // return loaded posts
        res.send(posts);
    }
}
export {Controller}