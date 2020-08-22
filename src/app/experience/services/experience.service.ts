import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Experience} from "../schemas/experience.schema";
import {DocumentQuery, Model, Types} from "mongoose";
import {CreateExperienceDto, UpdateExperienceDto} from "../dto";

@Injectable()
export class ExperienceService {
    constructor(
        @InjectModel(Experience.name) private model: Model<Experience>
    ) {}

    getDefaultOptions(): {} {
        return {
            sort: {
                order: -1
            }
        }
    }

    async findAll(
        owner: string
    ): Promise<DocumentQuery<Experience[], Experience, {}> & {}> {
        return this.model.find({
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        }, null, this.getDefaultOptions())
    }

    async findOne(
        id: string
    ): Promise<DocumentQuery<Experience | null, Experience, {}> & {}> {
        return this.model.findOne({
            _id: Types.ObjectId(id)
        })
    }

    async create(
        data: CreateExperienceDto,
        owner: string
    ): Promise<Experience> {
        const experience = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })
        return experience.save()
    }

    async update(
        id: string,
        data: UpdateExperienceDto
    ): Promise<DocumentQuery<Experience | null, Experience, {}> & {}> {
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id)
        }, data)
    }

    async remove(
        id: string
    ): Promise<DocumentQuery<Experience | null, Experience, {}> & {}> {
        return this.model.findOneAndRemove({
            _id: Types.ObjectId(id)
        })
    }
}
