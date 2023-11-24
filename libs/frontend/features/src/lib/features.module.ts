import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DirectorService } from './director/director.service';
import { DirectorDetailComponent } from './director/director-detail/director-detail.component';
import { DirectorEditComponent } from './director/director-edit/director-edit.component';
import { DirectorListComponent } from './director/director-list/director-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieService } from './movie/movie.service';

const routes: Routes = [
  // Link to dashboard
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

  //Dashboard page
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },

  //About page
  { path: 'about', pathMatch: 'full', component: AboutComponent },

  //User-list, create-user, user-details, edit-user pages
  { path: 'user', pathMatch: 'full', component: UserListComponent },
  { path: 'user/new', pathMatch: 'full', component: UserEditComponent },
  { path: 'user/:id', pathMatch: 'full', component: UserDetailComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserEditComponent },

  //Director-list, create-Director, Director-details, edit-Director pages
  { path: 'director', pathMatch: 'full', component: DirectorListComponent },
  { path: 'director/new', pathMatch: 'full', component: DirectorEditComponent },
  {
    path: 'director/:id',
    pathMatch: 'full',
    component: DirectorDetailComponent,
  },
  {
    path: 'director/:id/edit',
    pathMatch: 'full',
    component: DirectorEditComponent,
  },

  //User-list, create-user, user-details, edit-user pages
  { path: 'movie', pathMatch: 'full', component: MovieListComponent },
  { path: 'movie/new', pathMatch: 'full', component: MovieEditComponent },
  { path: 'movie/:id', pathMatch: 'full', component: MovieDetailComponent },
  { path: 'movie/:id/edit', pathMatch: 'full', component: MovieEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    RouterLink,
    FormsModule,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
    DirectorListComponent,
    DirectorEditComponent,
    DirectorDetailComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieEditComponent,
  ],
  providers: [UserService, DirectorService, MovieService],
  exports: [
    UserListComponent,
    UserEditComponent,
    UserListComponent,
    DirectorDetailComponent,
    DirectorEditComponent,
    DirectorListComponent,
    MovieDetailComponent,
    MovieEditComponent,
    MovieListComponent,
    AboutComponent,
    DashboardComponent,
    RouterModule,
  ],
})
export class FeaturesModule {}
