import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './app/auth/auth.module';
import {UserModule} from './app/user/user.module';
import {ConfigModule} from "@nestjs/config";
import configuration from './config/configuration';
import {MongooseModule} from "@nestjs/mongoose";
import { DatabaseModule } from './app/core/database/database.module';
import { ProfileModule } from './app/profile/profile.module';
import { ExpertiseModule } from './app/expertise/expertise.module';
import { SkillModule } from './app/skill/skill.module';
import { ExperienceModule } from './app/experience/experience.module';
import { EducationModule } from './app/education/education.module';
import { ProjectModule } from './app/project/project.module';
import { CertificatesModule } from './app/certificates/certificates.module';
import { ExternalModule } from './app/external/external.module';

@Module({
    imports: [
        ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true
        }),
        DatabaseModule,
        AuthModule,
        UserModule,
        DatabaseModule,
        ProfileModule,
        ExpertiseModule,
        SkillModule,
        ExperienceModule,
        EducationModule,
        ProjectModule,
        CertificatesModule,
        ExternalModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
