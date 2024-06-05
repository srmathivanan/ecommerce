import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareSolutionsWorkspaceComponent } from './feature/software-solutions-workspace/software-solutions-workspace.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Default route
  { path: 'main', component: SoftwareSolutionsWorkspaceComponent } 
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
