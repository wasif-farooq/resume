import {IsNotEmpty, IsNumber, IsString, ValidateIf} from "class-validator";
import { ApiPropertyOptional} from "@nestjs/swagger";

export class UpdateSkillDto {

    @ApiPropertyOptional({ type: String })
    @ValidateIf(o => o.hasOwnProperty('name'))
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiPropertyOptional({ type: Number })
    @ValidateIf(o => o.hasOwnProperty('percentage'))
    @IsNumber()
    @IsNotEmpty()
    percentage: number

    @ApiPropertyOptional({ type: Number })
    @ValidateIf(o => o.hasOwnProperty('order'))
    @IsNumber()
    @IsNotEmpty()
    description: number
}