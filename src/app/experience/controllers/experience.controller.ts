import {Body, Controller, Get, Param, Post, Put, Request, Delete, UseGuards} from '@nestjs/common';
import {ExperienceService} from "../services/experience.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {CreateExperienceDto, UpdateExperienceDto} from "../dto";

@Controller('experiences')
export class ExperienceController {
    constructor(
        private service: ExperienceService
    ) {
    }

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
        @Body() data: CreateExperienceDto,
        @Request() req: any
    ) {
        return this.service.create(data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param() params: any,
        @Body() data: UpdateExperienceDto
    ) {
        return this.service.update(params.id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(
        @Param() params: any
    ) {
        return this.service.remove(params.id)
    }
}
