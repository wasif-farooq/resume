import {IsEmail, IsNotEmpty, IsString, ValidateIf} from "class-validator";
import {ApiProduces, ApiProperty} from "@nestjs/swagger";

export class CreateProfileDto {

    @ApiProperty({ required: true, type: String })
    @IsString()
    @IsNotEmpty()
    firstName: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('middleName'))
    @IsString()
    middleName: string

    @ApiProperty({ required: true, type: String })
    @IsString()
    @IsNotEmpty()
    lastName: string

    @ApiProperty({ required: true, type: String })
    @IsString()
    @IsEmail()
    email: string

    @ApiProperty({ required: true, type: String })
    @IsString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({ required: true, type: String })
    @IsString()
    @IsNotEmpty()
    designation: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('photo'))
    @IsString()
    photo: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('website'))
    @IsString()
    website: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('skype'))
    @IsString()
    skype: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('summary'))
    @IsString()
    summary: string
}