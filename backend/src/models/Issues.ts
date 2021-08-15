import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("issues")
class Issues {
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    issuer: string;

    @Column("timestamp")
    created: Date;
}

export default Issues;
