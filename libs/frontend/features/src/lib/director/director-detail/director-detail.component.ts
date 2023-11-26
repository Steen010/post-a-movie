import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDirector } from '@avans-indiv-p2/shared/api';
import { DirectorService } from '../director.service';
import { Subscription, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'avans-indiv-p2-director-detail',
  templateUrl: './director-detail.component.html',
  styles: [],
})
export class DirectorDetailComponent implements OnInit, OnDestroy {
  director: IDirector | null = null;
  subscription: Subscription | undefined = undefined;

  constructor(
    private directorService: DirectorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap((params: ParamMap) =>
          console.log('director.id = ', params.get('id'))
        ),
        switchMap((params: ParamMap) =>
          this.directorService.read(params.get('id'))
        ),
        tap(console.log)
      )
      .subscribe((results) => {
        this.director = results;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
