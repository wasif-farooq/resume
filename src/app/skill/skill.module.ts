import { Module } from '@nestjs/common';
import { SkillController } from './controllers/skill.controller';
import { SkillService } from './services/skill.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Skill, SkillSchema} from "./schemas";

@Module({
  imports: [
      MongooseModule.forFeature([{
        name: Skill.name,
        schema: SkillSchema
      }])
  ],
  controllers: [SkillController],
  providers: [SkillService]
})
export class SkillModule {}
