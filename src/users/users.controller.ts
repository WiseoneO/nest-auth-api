/* eslint-disable prettier/prettier */
import { AuthService } from "src/auth/auth.service";
import { UsersService } from "./users.service";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Controller()
export class UsersController {
    constructor(
        private readonly userService: UsersService, 
        private readonly authService: AuthService
        ){}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Body('username') username:string, @Body('password') password:string){
        return this.authService.login(username, password)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('test')
    async data(){
        return 'Success';
    }

    
}