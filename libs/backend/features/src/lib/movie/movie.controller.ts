import { Controller } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Get, Param, Post, Body, Put } from '@nestjs/common';
import { IMovie } from '@avans-indiv-p2/shared/api';
import { CreateMovieDto, UpdateMovieDto } from '@avans-indiv-p2/backend/dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get('')
  getAll(): IMovie[] {
    return this.movieService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IMovie {
    return this.movieService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateMovieDto): IMovie {
    return this.movieService.create(data);
  }

  @Put('')
  update(@Body() data: UpdateMovieDto): IMovie {
    return this.movieService.update(data);
  }
}
