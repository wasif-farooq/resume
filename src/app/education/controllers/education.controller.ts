import {Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import {EducationService} from "../services/education.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {request} from "express";
import {CreateEducation} from "../dto";
import {UpdateEducation} from "../dto/update.education.dto";

@Controller('educations')
export class EducationController {
    constructor(
        private service: EducationService
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
        @Body() data: CreateEducation,
        @Request() req: any
    ) {
        return this.service.create(data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param() params: any,
        @Body() data: UpdateEducation,
        @Request() req: any
    ) {
        return this.service.update(params.id, data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(
        @Param() params: any
    ) {
        return this.service.remove(params.id)
    }

}
