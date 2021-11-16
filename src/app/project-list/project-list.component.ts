import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../models/mocks/projects.mocks';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  searchText: string;
  projectCount: number = 0;
  constructor(private projectService: ProjectService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(pa => {
      pa["id"] != undefined ?
        this.projectService.getProjectsByCategory(pa["id"]).subscribe((data: Project[]) => {
          this.projects = data;
          this.projectCount = this.projects?.length
        })
        :
        this.projectService.getProjects().subscribe((data: Project[]) =>{ 
          this.projects = data; 
          this.projectCount = this.projects?.length
        });
      //this.projectCount = this.projects?.length;

    });



  }

}
