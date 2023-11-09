import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BackendFeaturesModule } from '@avans-indiv-p2/backend/features';

@Module({
  imports: [BackendFeaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
