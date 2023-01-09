/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import {v4 as uuidv4}  from 'uuid'
@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UsersService {
    private users:User[]=[];
    insertUser(name:string,age:number,surname:string,email:string){
        const id=uuidv4();
        const newUser=new User(id,name,age,surname,email);
        this.users.push(newUser);
        return newUser;
    }
    getAllUsers(){
        return [...this.users];
    }
    getUser(id:string){
return this.users.find((u)=>u.id==id);
    }
}