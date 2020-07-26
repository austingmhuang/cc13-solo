import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Skill from "./Skill";
@Entity()
export class GuildMember {
@PrimaryGeneratedColumn()
    public id: number;
@Column()
    public name: string;

    @Column({nullable:true})
    public class: string;

    @Column({nullable:true})
    public race: string;

    @OneToMany(
               () => Skill,
               (skills) => skills.guildMember,
               {eager: true, cascade: true}
    )
    public skills: Skill[];
}
export default GuildMember;