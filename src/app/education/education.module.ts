import { Module } from '@nestjs/common';
import { EducationController } from './controllers/education.controller';
import { EducationService } from './services/education.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Education, EducationSchema} from "./schemas";

@Module({
  imports: [
      MongooseModule.forFeature([{
        name: Education.name,
        schema: EducationSchema
      }])
  ],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {}
