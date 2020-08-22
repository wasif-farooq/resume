import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Skill} from "../../skill/schemas";
import {Document, Types} from "mongoose";
import {User} from "../../user/schemas/user.schema";

@Schema({timestamps: true})
export class Project extends Document {

    @Prop({required: true})
    title: String

    @Prop()
    description: String

    @Prop()
    skilles: [Skill]

    @Prop({default: 0})
    order: number

    @Prop({default: false})
    deleted: boolean

    @Prop({default: true})
    active: boolean

    @Prop({typ: Types.ObjectId, ref: User.name, required: true})
    owner: Types.ObjectId

}

export const ProjectSchema = SchemaFactory.createForClass(Project)