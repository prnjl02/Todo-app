import { Component, OnInit, Testability } from '@angular/core';
import Task from './Task';
import FilterData from './Filterdata.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  tasks: Array<Task> = [];
  current_filter: string = 'all';



  constructor() {

  }

  clearToDo() {
    let do_delete = confirm("Are you sure to delete all tasks?");
    if (do_delete) {
      this.tasks.splice(0);
    }
  }

  addTask(value: string) {
    this.tasks.push(
      {
        title: value,
        is_completed: false

      });

  }

  // cancelTask(idx: number){
  //   this.tasks[idx].is_canceled = true;
  //   console.log(this.tasks[idx].is_canceled);

  // }

  cancelTask(idx: number) {
    if (this.tasks[idx].is_completed) {
      this.tasks[idx].is_completed = false;
    } else {
      this.tasks[idx].is_completed = true;
    }

  }

  deleteTask(idx: number) {
    let do_delete = confirm("Are you sure to delete the task?");
    if (do_delete) {
      this.tasks.splice(idx, 1);
    }
  }

  setFilter(filter: string) {
    this.current_filter = filter;
  }


  ngOnInit() {

  }

}


