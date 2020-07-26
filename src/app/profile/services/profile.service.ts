import { Injectable } from '@nestjs/common';
import {DocumentQuery, Model, Types} from "mongoose";
import { Profile } from "../schemas/profile.schema";
import { InjectModel } from "@nestjs/mongoose";
import {CreateProfileDto} from "../dto/create.profile.dto";
import {AlreadyExistsException} from "../../../shared/exceptions/already.exists.exception";
import {UpdateProfileDto} from "../dto/update.profile.dto";

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

    async update(id: string, data: UpdateProfileDto, owner: string): Promise<DocumentQuery<Profile | null, Profile, {}> & {}> {
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id),
            owner: Types.ObjectId(owner)
        }, data)
    }
}
