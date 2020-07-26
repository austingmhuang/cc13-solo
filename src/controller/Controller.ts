import {Request, Response} from 'express';
import GuildMember from "../entity/GuildMember";
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
        const memberRepository = getManager().getRepository(GuildMember);

        // get by Id
        const member = await memberRepository.findOne(req.params.id);

        // if post was not found return 404 to the client
        if (!member) {
            res.status(404);
            res.end();
            return;
        }

        // return loaded post
        res.send(member);
    }

    public async getAllMembers(request: Request, response: Response) {

        // get a post repository to perform operations with post
        const memberRepository = getManager().getRepository(GuildMember);
    
        // get all
        const member = await memberRepository.find();
    
        // return loaded member
        response.send(member);
    };
    
    public async deleteMember(req: Request, res: Response){
        // get a post repository to perform operations with post
        const memberRepository = getManager().getRepository(GuildMember);
    
        // delete by id
        const member = await memberRepository.delete(req.params.id);
    
        // return loaded member
        res.send(member);
    };

    public async updateMember(req: Request, res: Response){
        // get a post repository to perform operations with post
        const memberRepository = getManager().getRepository(GuildMember);
    
        // update
        const member = await memberRepository.findOne(req.params.id);
        member.class = req.body.class;
        member.itemLevel = req.body.itemLevel;
        member.lastPlayed = req.body.lastPlayed;
        member.race = req.body.race;
        member.specialization = req.body.specialization;
        member.name = req.body.name;
    
        await memberRepository.save(member);
        // return loaded member
        res.send(member);
    }
}
export {Controller}