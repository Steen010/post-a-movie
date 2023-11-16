import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { MealService } from './meal/meal.service';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';

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

  //Test meal list
  { path: 'meal', pathMatch: 'full', component: MealListComponent },
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
    MealListComponent,
    MealDetailComponent,
    AboutComponent,
    DashboardComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
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
