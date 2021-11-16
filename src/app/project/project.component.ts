import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  project : Project = new Project(3,'Şehir hastaneleri', 'Otomasyon Sistemi', undefined, 1);
  constructor() { }

  ngOnInit(): void {
  }

}
