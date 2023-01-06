import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserReportsComponent } from './pages/user/user-reports/user-reports.component';
const routes: Routes = [
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard]  },
  { path: 'userDetails/:id', component: UserReportsComponent, canActivate: [AuthGuard] },
  { path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard] },
  { path: 'loginpage', component: LoginPageComponent, },
  { path: '', redirectTo: 'loginpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
