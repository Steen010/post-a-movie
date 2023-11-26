import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DirectorController } from './director/director.controller';
import { DirectorService } from './director/director.service';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';

@Module({
  controllers: [UserController, MovieController, DirectorController],
  providers: [UserService, MovieService, DirectorService],
  exports: [UserService, MovieService, DirectorService],
})
export class BackendFeaturesModule {}
