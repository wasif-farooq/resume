import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({ timestamps: true })
export class Skill extends Document {

    @Prop({ required: true })
    name: string

    @Prop()
    percentage: number

    @Prop({ default: 0 })
    order: number

    @Prop({ default: false })
    deleted: boolean

    @Prop({ default: true })
    active: boolean

    @Prop({ typ: Types.ObjectId, ref: User.name, required: true })
    owner: Types.ObjectId
}

export const  SkillSchema = SchemaFactory.createForClass(Skill)