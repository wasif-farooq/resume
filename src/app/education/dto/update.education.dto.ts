import {
    IsNotEmpty,
    IsString,
    ValidateIf,
    IsBoolean,
    IsNumber,
    Type
} from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

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
    @Type(() => Date)
    @IsNotEmpty()
    started: Date

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.isEnded === true && o.hasOwnProperty('ended'))
    @Type(() => Date)
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
    degree: string

}