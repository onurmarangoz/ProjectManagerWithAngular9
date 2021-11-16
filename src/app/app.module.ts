import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ProjectSearchPipe } from './pipes/project-search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoryMenuComponent,
    ProjectListComponent,
    ProjectComponent,
    TaskListComponent,
    UserListComponent,
    HeaderMenuComponent,
    ProjectSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
