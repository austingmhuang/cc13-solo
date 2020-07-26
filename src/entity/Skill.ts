import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import GuildMember from "./GuildMember";
@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public description: string;
    @ManyToOne(() => GuildMember, (guildMember) => guildMember.skills)
    public guildMember: GuildMember;
}
export default Skill;