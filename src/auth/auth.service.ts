/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, @InjectModel('User' )private readonly userModel: Model<User>){

    }

    async login(username: string,password:string): Promise<any>{

        const user = await this.userModel.findOne({username: username, password:password});

        const access_token =  this.jwtService.sign({
            user: user.username,
            userid : user._id
        });

        return {accesstoken:access_token};
    }
}
