import {
    IsNotEmpty,
    IsString,
    ValidateIf,
    IsBoolean,
    IsNumber,
    IsDateString
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateEducation {

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    degree: string

    @ApiProperty({ type: String })
    @IsString()
    @IsNotEmpty()
    institute: string

    @ApiPropertyOptional({ type: String })
    @ValidateIf(o => o.hasOwnProperty('address'))
    @IsString()
    address: string

    @ApiProperty({ type: Date })
    @IsDateString()
    @IsNotEmpty()
    started: Date

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.isEnded === true)
    @IsDateString()
    @IsNotEmpty()
    ended: Date

    @ApiProperty({ type: Boolean })
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

}