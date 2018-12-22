import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceSettingsComponent } from './device-settings/device-settings.component';

const routes: Routes = [
  { path: 'main-app', component: DashboardComponent },
  { path: 'device-settings/:id', component: DeviceSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
