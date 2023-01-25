import  {Sequelize} from "sequelize-typescript";
import { Books } from "../models/books";
import { Todos } from "../models/todos";


const connection = new Sequelize({
   dialect :"mysql",
   host :"localhost",
   username:"root",
   password: '',
   database:"todo",
   logging :false,
   models :[Todos]
}  );

/**
 * const connection = new Sequelize('usersdb', 'root','', {
    host: 'localhost',
    dialect:"mysql",
    database:"todo"
});

 */

export default connection