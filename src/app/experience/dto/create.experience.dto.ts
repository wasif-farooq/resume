import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {
    IsBoolean,
    IsDateString,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateIf
} from "class-validator";

export class CreateExperienceDto {

    @ApiProperty({type: String})
    @IsString()
    @IsNotEmpty()
    designation: string

    @ApiProperty({type: String})
    @IsString()
    @IsNotEmpty()
    company: string

    @ApiProperty({type: String})
    @IsString()
    address: string

    @ApiProperty({type: Date})
    @IsDateString()
    @IsNotEmpty()
    started: Date

    @ApiProperty({type: Date})
    @ValidateIf(o => o.isEnded === true)
    @IsDateString()
    @IsNotEmpty()
    ended: Date

    @ApiProperty({type: Boolean})
    @IsBoolean()
    isEnded: boolean

    @ApiPropertyOptional({type: Number})
    @ValidateIf(o => o.hasOwnProperty('order'))
    @IsNumber()
    @IsNotEmpty()
    order: number

    @ApiPropertyOptional({type: String})
    @ValidateIf(o => o.hasOwnProperty('description'))
    @IsString()
    description: string

    @ApiPropertyOptional({type: String})
    @ValidateIf(o => o.hasOwnProperty('resposiblities'))
    @IsString()
    resposiblities: string
}