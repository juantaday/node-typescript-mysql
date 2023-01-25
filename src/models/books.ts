import {Table , Model , Column, DataType} from "sequelize-typescript";

@Table({
    timestamps:false,
    tableName:"books"
})

export  class Books extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    id!:BigInt;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    author!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    title!:string;
};