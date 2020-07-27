import {
    IsNotEmpty,
    IsString,
    ValidateIf,
    IsBoolean,
    IsNumber,
    Type
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
    @Type(() => Date)
    @IsNotEmpty()
    started: Date

    @ApiProperty({ type: Date })
    @ValidateIf(o => o.isEnded === true)
    @Type(() => Date)
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

}