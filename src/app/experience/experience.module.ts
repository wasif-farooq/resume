import { Module } from '@nestjs/common';
import { ExperienceController } from './controllers/experience.controller';
import { ExperienceService } from './services/experience.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Experience, ExperienceSchema} from "./schemas/experience.schema";

@Module({
  imports: [
      MongooseModule.forFeature([{
        name: Experience.name,
        schema: ExperienceSchema
      }])
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
