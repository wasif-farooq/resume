import {Body, Controller, Get, UseGuards, Request, Post, Param, Put, Delete} from '@nestjs/common';
import {SkillService} from "../services/skill.service";
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {SkillDto} from "../dto/skill.dto";

@Controller('skills')
export class SkillController {
    constructor(
        private skillService: SkillService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async all(
        @Request() req: any
    ) {
        return this.skillService.findAll(req.user.userId)
    }

    @Get(':id')
    async one(
        @Param() params: any
    ) {
        return this.skillService.findOne(params.id)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() data: SkillDto,
        @Request() req: any
    ) {
        return this.skillService.create(data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(
        @Param() params: any,
        @Body() data: SkillDto
    ) {
        return this.skillService.update(params.id, data)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(
        @Param() params: any
    ) {
        return this.skillService.remove(params.id)
    }
}
