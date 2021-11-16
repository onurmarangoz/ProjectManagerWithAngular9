import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>("https://localhost:44387/api/Projects");
                    
  }
  getProjectsByCategory(id:number): Observable<Project[]> {
    return this.http.get<Project[]>("https://localhost:44387/api/Projects/"+id);
  }
}
