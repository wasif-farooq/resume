import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({ timestamps: true })
export class Expertise extends Document {

    @Prop({ required: true })
    name: string

    @Prop({ default: 0 })
    order: number

    @Prop({ type: Types.ObjectId, ref: User.name, required: true })
    owner: Types.ObjectId

    @Prop({ default: true })
    active: boolean

    @Prop({ default: false })
    deleted: boolean

}

export const ExpertiseSchema = SchemaFactory.createForClass(Expertise)