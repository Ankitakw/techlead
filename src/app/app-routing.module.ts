import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  },
  { path: 'loginpage', component: LoginPageComponent, },
  { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
  { path: 'customers', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
