import { Module } from '@nestjs/common';
import { ExpertiseController } from './controllers/expertise.controller';
import { ExpertiseService } from './services/expertise.service';

@Module({
  controllers: [ExpertiseController],
  providers: [ExpertiseService]
})
export class ExpertiseModule {}
