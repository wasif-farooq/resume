import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Education} from "../schemas";
import {CreateQuery, DocumentQuery, Model, Types} from "mongoose";
import {CreateEducation} from "../dto";
import {UpdateEducation} from "../dto/update.education.dto";
import {Type} from "class-transformer";
import {types} from "util";

@Injectable()
export class EducationService {
    constructor(
        @InjectModel(Education.name) private model: Model<Education>
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
    ): Promise<DocumentQuery<Education[], Education, {}> & {}> {
        return this.model.find({
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        }, null, this.getDefaultOptions())
    }

    async findOne(
        id: string
    ): Promise<DocumentQuery<Education | null, Education, {}> & {}> {
        return this.model.findOne({
            _id: Types.ObjectId(id)
        })
    }

    async create(
        data: CreateEducation,
        owner: string
    ): Promise<Education> {
        const education = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })
        return education.save()
    }

    async update(
        id: string,
        data: UpdateEducation,
        owner: string
    ): Promise<DocumentQuery<Education | null, Education, {}> & {}> {
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id)
        }, data)
    }

    async remove(
        id: string
    ): Promise<DocumentQuery<Education | null, Education, {}> & {}> {
        return this.model.findOneAndRemove({
            _id: Types.ObjectId(id)
        })
    }
}
