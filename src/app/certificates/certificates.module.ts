import { Module } from '@nestjs/common';
import { CertificatesController } from './controllers/certificates.controller';
import { CertificatesService } from './services/certificates.service';

@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService]
})
export class CertificatesModule {}
