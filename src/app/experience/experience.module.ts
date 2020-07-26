import { Module } from '@nestjs/common';
import { ExperienceController } from './controllers/experience.controller';
import { ExperienceService } from './services/experience.service';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
