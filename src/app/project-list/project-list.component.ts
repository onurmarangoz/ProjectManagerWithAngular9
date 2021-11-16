import { Component, OnInit } from '@angular/core';
import { projects } from '../models/mocks/projects.mocks';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects : Project[]=projects;
  searchText:string;
  constructor() { }

  ngOnInit(): void {
  }

}
