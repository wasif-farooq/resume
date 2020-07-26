import { Injectable } from '@nestjs/common';
import { Model, Types } from "mongoose";
import { Profile } from "../schemas/profile.schema";
import { InjectModel } from "@nestjs/mongoose";
import {CreateProfileDto} from "../dto/create.profile.dto";
import {AlreadyExistsException} from "../../../shared/exceptions/already.exists.exception";
import {UpdateProfileDto} from "../dto/update.profile.dto";
import {Type} from "class-transformer";

@Injectable()
export class ProfileService {
    constructor(
        @InjectModel(Profile.name) private model: Model<Profile>
    ) {}

    async get(owner: string): Promise<Profile> {
        return this.model.findOne({ owner: Types.ObjectId(owner) })
    }

    async create(data: CreateProfileDto, owner: string): Promise<Profile> {
        if (await this.get(owner)) {
            throw new AlreadyExistsException()
        }
        const profile = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })
        return profile.save()
    }

    async update(id: string, data: UpdateProfileDto, owner: string): Promise<Profile> {
        console.log(id, data, owner)
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id),
            owner: Types.ObjectId(owner)
        }, {
            $set: data
        })
    }
}
