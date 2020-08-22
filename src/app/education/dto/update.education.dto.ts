import {
    IsNotEmpty,
    IsString,
    ValidateIf,
    IsBoolean,
    IsNumber,
    IsDateString
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {Type} from "class-transformer";

export class UpdateEducation {

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('degree'))
    @IsString()
    @IsNotEmpty()
    degree: string

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('institute'))
    @IsString()
    @IsNotEmpty()
    institute: string

    @ApiPropertyOptional({ type: String })
    @ValidateIf(o => o.hasOwnProperty('address'))
    @IsString()
    address: string

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.hasOwnProperty('address'))
    @IsDateString()
    @IsNotEmpty()
    started: Date

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.isEnded === true && o.hasOwnProperty('ended'))
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
    @IsString()
    description: string

}