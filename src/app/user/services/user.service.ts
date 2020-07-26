import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from "../schemas/user.schema";
import {RegisterDto} from "../../auth/dto";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async import(): Promise<User> {
        const user = new this.userModel({
            username: 'john',
            password: 'changeme',
            consumerKey: '1',
            consumerSecret: '1'
        })
        return user.save()
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.userModel.findOne({ username })
    }

    async create(data: RegisterDto): Promise<User> {
        const user = new this.userModel({
            username: data.username,
            password: data.password,
            consumerKey: '1',
            consumerSecret: '1'
        })
        return user.save()
    }
}