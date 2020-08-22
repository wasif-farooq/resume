import {IsEmail, IsNotEmpty, IsString, ValidateIf} from "class-validator";
import {ApiProduces, ApiProperty} from "@nestjs/swagger";

export class UpdateProfileDto {

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('firstName'))
    @IsString()
    @IsNotEmpty()
    firstName: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('middleName'))
    middleName: string

    @ApiProperty({  type: String })
    //@ValidateIf(o => o.hasOwnProperty('lastName'))
    //@IsNotEmpty()
    lastName: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('email'))
    //@IsEmail()
    email: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('phone'))
    //@IsNotEmpty()
    phone: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('designation'))
    //@IsNotEmpty()
    designation: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('photo'))
    photo: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('website'))
    website: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('skype'))
    skype: string

    @ApiProperty({ type: String })
    //@ValidateIf(o => o.hasOwnProperty('summary'))
    summary: string
}