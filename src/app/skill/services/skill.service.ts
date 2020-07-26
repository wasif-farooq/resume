import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Skill} from "../schemas/skill.schema";
import {CreateQuery, DocumentQuery, Model, Types} from "mongoose";
import {SkillDto} from "../dto/skill.dto";

@Injectable()
export class SkillService {
    constructor(
        @InjectModel(Skill.name) private model: Model<Skill>
    ) {}

    async findAll(owner: string): Promise<DocumentQuery<Skill[], Skill, {}> & {}> {
        return this.model.find({
            owner: Types.ObjectId(owner),
            active: true,
            deleted: false
        }, null, { sort: { order: -1 } })
    }

    async findOne(id: string): Promise<DocumentQuery<Skill | null, Skill, {}> & {}> {
        return this.model.findOne({
            _id: Types.ObjectId(id)
        })
    }

    async has(name: string, owner: string): Promise<DocumentQuery<Skill | null, Skill, {}> & {}> {
        return this.model.findOne({
            name: name,
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        })
    }

    async create(data: SkillDto, owner: string): Promise<Skill> {
        const skill = await this.has(data.name, owner)
        if (skill) {
            return skill
        }

        const model = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })
        return model.save()
    }

    async update(id: string, data: SkillDto): Promise<DocumentQuery<Skill | null, Skill, {}> & {}> {
       return this.model.findOneAndUpdate({
           _id: Types.ObjectId(id)
       }, data)
    }

    async remove(id: string): Promise<DocumentQuery<Skill | null, Skill, {}> & {}> {
        return this.model.findOneAndDelete({
            _id: Types.ObjectId(id)
        })
    }
}
