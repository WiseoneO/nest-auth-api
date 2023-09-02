/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './users.model';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}]), AuthModule],
  controllers:[UsersController],
  providers: [UsersService],

  exports: [UsersService],
})
export class UsersModule {}
