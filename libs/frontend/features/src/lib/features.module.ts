import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { MealService } from './meal/meal.service';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'user',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: 'meal',
    pathMatch: 'full',
    component: MealListComponent,
  },
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    DashboardComponent,
    UserListComponent,
  ],
  providers: [UserService, MealService],
  exports: [
    MealListComponent,
    MealDetailComponent,
    UserListComponent,
    AboutComponent,
    DashboardComponent,
    RouterModule,
  ],
})
export class FeaturesModule {}
