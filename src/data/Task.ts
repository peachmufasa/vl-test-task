import {Guid} from "js-guid";

export enum TaskPriority {
    low = 'Low',
    normal = 'Normal',
    high = 'High'
}

export enum TaskTag {
    research = 'Research',
    design = 'Design',
    development = 'Development'
}

export class Task {
     title: string;
     created: Date
     priority: TaskPriority;
     tags: TaskTag[];
     id: string;
     description: string;

     constructor(title:string, priority:TaskPriority, tags:TaskTag[], description:string  ) {
         this.title = title;
         this.created = new Date();
         this.priority = priority;
         this.tags = tags;
         this.description = description;
         this.id = Guid.newGuid().toString();
     }
}

