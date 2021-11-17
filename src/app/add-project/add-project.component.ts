import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { Project } from '../models/project.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  project: Project = new Project();
  categories:Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data:Category[]) => this.categories=data);
  }

  addProject(){
    console.log(this.project);
    console.log("Şuanda sunucuya gönderilir!");
  }
  addProjectWithValidation(form: NgForm){
    console.log("Form geldiii");
    console.log(form.invalid);
    console.log(form.value.name);
    if(form.invalid){
      alert("Problem var");
    }

    this.project = form.value;
  }
}
