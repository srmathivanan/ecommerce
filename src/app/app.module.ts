import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { SoftwareSolutionsWorkspaceComponent } from './feature/software-solutions-workspace/software-solutions-workspace.component';
import { SoftwareSolutionsHomeComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-home/software-solutions-home.component';
import { SoftwareSolutionsHeaderComponent } from './feature/software-solutions-workspace/software-solutions-header/software-solutions-header.component';
import { SoftwareSolutionsFooterComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-footer/software-solutions-footer.component';
import { SoftwareSolutionsContentsComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-contents.component';
import { SoftwareSolutionsAboutComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-about/software-solutions-about.component';
import { SoftwareSolutionsServicesComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-services/software-solutions-services.component';
import { SoftwareSolutionsContactComponent } from './feature/software-solutions-workspace/software-solutions-contents/software-solutions-contact/software-solutions-contact.component';

@NgModule({
  declarations: [
    AppComponent, 
    SoftwareSolutionsWorkspaceComponent,
    SoftwareSolutionsHeaderComponent,
    SoftwareSolutionsFooterComponent,
    SoftwareSolutionsHomeComponent,
    SoftwareSolutionsContentsComponent,
    SoftwareSolutionsAboutComponent,
    SoftwareSolutionsServicesComponent,
    SoftwareSolutionsContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
