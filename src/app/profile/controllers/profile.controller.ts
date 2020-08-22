import {Body, Controller, Get, Post, UseGuards, Request, NotFoundException, Put, Param} from '@nestjs/common';
import {JwtAuthGuard} from "../../auth/guard/jwt-auth.guard";
import {ProfileService} from "../services/profile.service";
import {CreateProfileDto} from "../dto/create.profile.dto";
import {UpdateProfileDto} from "../dto/update.profile.dto";

@Controller('profile')
export class ProfileController {
    constructor(
        private profileService: ProfileService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async get(@Request() req: any) {
        const profile = await this.profileService.get(req.user.userId)
        if (!profile) {
            throw new NotFoundException()
        }
        return profile
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() data: CreateProfileDto, @Request() req: any) {
        return this.profileService.create(data, req.user.userId)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param() param: any, @Body() data: UpdateProfileDto, @Request() req: any) {
        const profile = this.profileService.update(param.id, data, req.user.userId)
        if (!profile) {
            throw new NotFoundException()
        }
        return profile
    }
}
