import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, "HES", "Hayat Eve Sığar", [
        new Task(1,"Bir görev", "Görev açıklaması", new Date(2021,10,31),false),
        new Task(2,"Bir görev", "Görev açıklaması", new Date(2021,10,15),true)
    ],1),
    new Project(2, "Sadakat", ".....", [
        new Task(1,"Bir görev", "Görev açıklaması", new Date(2021,10,31),false),
        new Task(2,"Bir görev", "Görev açıklaması", new Date(2021,10,15),true)
    ],2)
];