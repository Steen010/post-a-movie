import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectorService } from '../director.service';
import { IDirector } from '@avans-indiv-p2/shared/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'avans-indiv-p2-director-list',
  templateUrl: './director-list.component.html',
  styles: [],
})
export class DirectorListComponent implements OnInit, OnDestroy {
  directors: IDirector[] | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(private directorService: DirectorService) {}

  ngOnInit(): void {
    this.subscription = this.directorService.list().subscribe((results) => {
      console.log(`results: ${results}`);
      this.directors = results;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
