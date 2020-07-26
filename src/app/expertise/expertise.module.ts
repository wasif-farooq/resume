import { Module } from '@nestjs/common';
import { ExpertiseController } from './controllers/expertise.controller';
import { ExpertiseService } from './services/expertise.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Expertise, ExpertiseSchema} from "./schemas/expertise.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Expertise.name,
      schema: ExpertiseSchema
    }])
  ],
  controllers: [ExpertiseController],
  providers: [ExpertiseService]
})
export class ExpertiseModule {}
