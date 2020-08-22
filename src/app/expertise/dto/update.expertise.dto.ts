import {IsNotEmpty, IsNumber, IsString, ValidateIf} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateExpertiseDto {

    @ApiProperty({ type: String })
    @ValidateIf(o => o.hasOwnProperty('order'))
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({ type: Number })
    @ValidateIf(o => o.hasOwnProperty('order'))
    @IsNumber()
    @IsNotEmpty()
    order: number

}