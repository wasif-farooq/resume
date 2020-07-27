import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({ timestamps: true })
export class Education extends Document {

    @Prop({ required: true })
    degree: string

    @Prop({ required: true })
    institute: string

    @Prop()
    address: string

    @Prop({ required: true })
    started: Date

    @Prop()
    ended: Date

    @Prop()
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

export const  EducationSchema = SchemaFactory.createForClass(Education)