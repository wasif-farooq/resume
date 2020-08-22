import {Controller, Get, Param, Post, Request, Put, Delete, UseGuards, Body} from '@nestjs/common';
import {ProjectService} from "../services/project.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {CreateProjectDto} from "../dto";

@Controller('project')
export class ProjectController {
    constructor(
        private service: ProjectService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async all(
        @Request() req: any
    ) {
        return this.service.findAll(req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async one(
        @Param() params: any
    ) {
        return this.service.findOne(params.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() data: CreateProjectDto,
        @Request() req: any
    ) {
        return this.service.create(data, req.user.userId)
    }


}
