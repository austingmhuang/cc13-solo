import {Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";
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

    @Column({nullable:true})
    public specialization: string;

    @Column({nullable:true})
    public itemLevel: number;

    @CreateDateColumn()
    public lastPlayed: Date;

    @OneToMany(
               () => Skill,
               (skills) => skills.guildMember,
               {eager: true, cascade: true}
    )
    public skills: Skill[];
}
export default GuildMember;