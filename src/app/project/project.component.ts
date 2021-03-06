import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('currentProject') project : Project
  constructor() { }

  ngOnInit(): void {
  }

  getIncompletedTaskCount(){
    return this.project.tasks?.filter(t=>!t.isDone).length;
  }

}
