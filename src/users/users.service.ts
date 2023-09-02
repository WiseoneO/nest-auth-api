/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './users.model';
import {Model} from 'mongoose'



@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>
    ){}

    async signup(name:string, username:string, password:string):Promise<any>{
        // const user = await this.userModel.create()
    
        const newUser = new this.userModel({
          name:name,
          username:username,
          password:password
        });
    
        const saveUser = await newUser.save();
        return saveUser;
      }
}
