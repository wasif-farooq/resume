import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Expertise} from "../schemas/expertise.schema";
import {DocumentQuery, Model, Types} from "mongoose";
import {CreateExpertiseDto, UpdateExpertiseDto} from "../dto";

@Injectable()
export class ExpertiseService {
    constructor(
        @InjectModel(Expertise.name) private model: Model<Expertise>
    ) {}

    async findAll(
        owner: string
    ): Promise<DocumentQuery<Expertise[], Expertise, []> & {}> {
        return this.model.find({
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        })
    }

    async findOne(
        id: string
    ): Promise<DocumentQuery<Expertise | null, Expertise, {}> & {}> {
        return this.model.findOne({
            _id: Types.ObjectId(id)
        })
    }

    async has(
        name: string,
        owner: string
    ): Promise<DocumentQuery<Expertise | null, Expertise, {}> & {}> {
        return this.model.findOne({
            name: name,
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        })
    }

    async create(
        data: CreateExpertiseDto,
        owner: string
    ): Promise<DocumentQuery<Expertise | null, Expertise, {}> & {}> {
        const expertise = await this.has(data.name, owner)
        if (expertise) {
            return expertise
        }

        const model = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })

        return model.save()
    }

    async update(
        id: string,
        data: UpdateExpertiseDto
    ): Promise<DocumentQuery<Expertise | null, Expertise, {}> & {}> {
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id)
        }, data)
    }
    
    async remove(
        id: string
    ): Promise<DocumentQuery<Expertise | null, Expertise, {}> & {}> {
        return this.model.findOneAndDelete({
            _id: Types.ObjectId(id)
        })
    }
}
