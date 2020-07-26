import {Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import {ExpertiseService} from "../services/expertise.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {CreateExpertiseDto, UpdateExpertiseDto} from "../dto";

@Controller('expertises')
export class ExpertiseController {
    constructor(
        private service: ExpertiseService
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
        @Body() data: CreateExpertiseDto,
        @Request() req: any
    ) {
        return this.service.create(data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param() params: any,
        @Body() data: UpdateExpertiseDto
    ) {
        return this.service.update(params.id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(
        @Param() params: any,
    ) {
        return this.service.remove(params.id)
    }
}
