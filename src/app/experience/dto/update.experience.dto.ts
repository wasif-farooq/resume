import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString, ValidateIf} from "class-validator";

export class UpdateExperienceDto {

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('designation'))
    @IsString()
    @IsNotEmpty()
    designation: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('company'))
    @IsString()
    @IsNotEmpty()
    company: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('address'))
    @IsString()
    address: string

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.hasOwnProperty('started'))
    @IsDateString()
    @IsNotEmpty()
    started: Date

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.isEnded === true)
    @IsDateString()
    @IsNotEmpty()
    ended: Date

    @ApiProperty({ type: Boolean })
    @ValidateIf(o => o.hasOwnProperty('isEnded'))
    @IsBoolean()
    isEnded: boolean

    @ApiPropertyOptional({ type: Number })
    @ValidateIf(o => o.hasOwnProperty('order'))
    @IsNumber()
    @IsNotEmpty()
    order: number

    @ApiPropertyOptional({ type: String })
    @ValidateIf(o => o.hasOwnProperty('description'))
    @IsString()
    description: string

    @ApiPropertyOptional({ type: String })
    @ValidateIf(o => o.hasOwnProperty('resposiblities'))
    @IsString()
    resposiblities: string
}