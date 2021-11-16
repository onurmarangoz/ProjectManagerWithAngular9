import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'projectSearch'
})
export class ProjectSearchPipe implements PipeTransform {

  transform(value: Project[], searchText?:string): Project[] {
    return searchText !== undefined ?
           value.filter(pr=>pr.name?.toLowerCase().includes(searchText.toLowerCase()))
           :
           value;
  }

}
