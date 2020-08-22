import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Project} from "../schemas/project.schema";
import {DocumentQuery, Model, Types} from "mongoose";
import {CreateProjectDto, UpdateProjectDto} from "../dto";

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private model: Model<Project>
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
    ): Promise<DocumentQuery<Project[], Project, {}> & {}> {
        return this.model.find({
            owner: Types.ObjectId(owner),
            deleted: false,
            active: true
        }, null, this.getDefaultOptions())
    }

    async findOne(
        id: string
    ): Promise<DocumentQuery<Project | null, Project, {}> & {}> {
        return this.model.findOne({
            _id: Types.ObjectId(id)
        })
    }

    async create(
        data: CreateProjectDto,
        owner: string
    ): Promise<Project> {
        const project = new this.model({
            ...data,
            owner: Types.ObjectId(owner)
        })
        return project.save()
    }

    async update(
        id: string,
        data: UpdateProjectDto
    ): Promise<DocumentQuery<Project | null, Project, {}> & {}> {
        return this.model.findOneAndUpdate({
            _id: Types.ObjectId(id)
        }, data)
    }

    async remove(
        id: string
    ): Promise<DocumentQuery<Project | null, Project, {}> & {}> {
        return this.model.findOneAndRemove({
            _id: Types.ObjectId(id)
        })
    }
}
