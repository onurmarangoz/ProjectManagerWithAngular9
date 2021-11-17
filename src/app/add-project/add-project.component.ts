import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category.model';
import { Project } from '../models/project.model';
import { CategoryService } from '../services/category.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {



  constructor(private categoryService: CategoryService, private projectService: ProjectService) { }

  project: Project = new Project();
  categories: Category[];

  ngOnInit(): void {
     this.categoryService.getCategories().subscribe((data:Category[])=>this.categories=data);
  }

  addProject(){
    console.log(this.project);
    console.log("Şu anda sunucuya gönderilir!");
  }
  addProjectWithValidation(form: NgForm){
    console.log("Aaa bak bu form:");
    console.log(form.invalid)
    if (form.invalid) {
      alert("problem var..");
    }
    console.log(form.valid);
    //console.log(form.value.name);
    this.project = form.value;
    console.log(this.project);
    this.projectService.addProject(this.project).subscribe((data:Project)=>alert(data.name + " eklendi"));
  }

}
