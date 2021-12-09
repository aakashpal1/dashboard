import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ClassesComponent } from './classes/classes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningComponent } from './learning/learning.component';
import { ResourcesComponent } from './resources/resources.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'chat', component: ChatComponent },
  // { path: 'settings', component: SettingsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
