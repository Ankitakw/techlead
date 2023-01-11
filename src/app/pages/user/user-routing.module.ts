import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserReportsComponent } from './user-reports/user-reports.component';

const routes: Routes = [ { path: 'users', component: UserListComponent, canActivate: [AuthGuard]  },
{ path: 'userDetails/:id', component: UserReportsComponent, canActivate: [AuthGuard] },
{ path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }