import { Controller } from '@nestjs/common';
import { DirectorService } from './director.service';
import { Get, Param, Post, Body, Put } from '@nestjs/common';
import { IDirector } from '@avans-indiv-p2/shared/api';
import {
  CreateDirectorDto,
  UpdateDirectorDto,
} from '@avans-indiv-p2/backend/dto';

@Controller('director')
export class DirectorController {
  constructor(private directorService: DirectorService) {}

  @Get('')
  getAll(): IDirector[] {
    return this.directorService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): IDirector {
    return this.directorService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateDirectorDto): IDirector {
    return this.directorService.create(data);
  }

  @Put('')
  update(@Body() data: UpdateDirectorDto): IDirector {
    return this.directorService.update(data);
  }
}
