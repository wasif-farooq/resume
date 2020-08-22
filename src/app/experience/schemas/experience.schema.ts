import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({ timestamps: true })
export class Experience extends Document {

    @Prop({ required: true })
    designation: string

    @Prop({ required: true })
    company: string

    @Prop()
    address: string

    @Prop({ required: true })
    started: Date

    @Prop()
    ended: Date

    @Prop({ required: true })
    isEnded: boolean

    @Prop({ default: 0 })
    order: number

    @Prop({ default: false })
    deleted: boolean

    @Prop({ default: true })
    active: boolean

    @Prop({ typ: Types.ObjectId, ref: User.name, required: true })
    owner: Types.ObjectId
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience)