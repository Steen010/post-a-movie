import { Module } from '@nestjs/common';
import { BackendFeaturesModule } from '@avans-indiv-p2/backend/features';

@Module({
  imports: [BackendFeaturesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
