import  {RequestHandler} from "express";

import {Todos} from "../models/todos" ;

export  const createToDo: RequestHandler = async (req,res, next)=>{
    var todos = await Todos.create({...req.body});
    return res
    .status(200)
    .json({message:'Topdo created successfully',data:todos});
};

export const deleteToDo:RequestHandler = async (req,res, nex)=>{
     const {id} =req.params;
    const deletedTodo : Todos|null = await Todos.findByPk(id);

    await Todos.destroy({where:{id}});

    return res
    .status(200)
    .json({message:'todo deleted successfully', data:deletedTodo});

};

export const  getAllToDo: RequestHandler = async (req,res,next)=>{
    const allTodo: Todos[] = await Todos.findAll({});
    res
    .status(200)
    .json({message:'Todo fetched successfully', data:allTodo});
};

export const  getToDoById: RequestHandler = async (req,res,next)=>{
    const {id} = req.params;
    console.log(id);
    const todos: Todos|null = await Todos.findByPk(id);

    res
    .status(200)
    .json({message:'Todo fetched successfully', data:todos});
};

export const  updateToDo: RequestHandler = async (req,res,next)=>{
    const {id} = req.params;
    await Todos.update({...req.body},{where:{id}});

    const todos: Todos|null = await Todos.findByPk(id);

    res
    .status(200)
    .json({message:'Todo update successfully', data:todos});
};