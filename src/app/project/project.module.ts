import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "./schemas/project.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Project.name,
            schema: ProjectSchema
        }])
    ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
