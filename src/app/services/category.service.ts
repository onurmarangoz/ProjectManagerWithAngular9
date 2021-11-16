import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategories(): Observable<Category[]>{
   return this.httpClient.get<Category[]>("https://localhost:44387/api/Categories")
                   .pipe(
                         catchError((err:HttpErrorResponse) => throwError(err))
                        );
                         
  }
}
