import { Prop, Schema, SchemaFactory, } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

@Schema({ timestamps: true })
export class Profile extends Document {

    @Prop({ required: true })
    firstName: string

    @Prop({ required: false })
    middleName: string

    @Prop({ required: false })
    lastName: string

    @Prop({ required: false })
    email: string

    @Prop({ required: false })
    phone: string

    @Prop({ required: false })
    designation: string

    @Prop({ required: false })
    photo: string

    @Prop({ required: false })
    website: string

    @Prop({ required: false })
    skype: string

    @Prop({ required: false })
    summary: string

    @Prop({ type: Types.ObjectId, ref: 'User', required: true  })
    owner: Types.ObjectId
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)