import {TaskStatus} from '../enum/enum';
import { Guid } from "guid-typescript";


export class Task{
    title : String;
    status : TaskStatus;
    id;
    constructor(title : string){
        this.title = title;
        this.status = TaskStatus.notComplete;
        this.id = Guid.create();
    }
}