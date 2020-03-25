import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./feature/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'description/:issueNumber', loadChildren: () => import('./feature/description/description.module').then(m => m.DescriptionModule) },
  { path: 'resetPassword/:userId', loadChildren: () => import('./feature/authentication/reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
  { path: '**', loadChildren: () => import('./feature/authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
