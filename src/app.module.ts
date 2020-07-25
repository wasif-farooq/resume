import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {AuthModule} from './app/auth/auth.module';
import {UserModule} from './app/user/user.module';
import {ConfigModule} from "@nestjs/config";
import configuration from './config/configuration';
import {MongooseModule} from "@nestjs/mongoose";
import { DatabaseModule } from './app/core/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
          load: [configuration],
          isGlobal: true
        }),
        DatabaseModule,
        AuthModule,
        UserModule,
        DatabaseModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
