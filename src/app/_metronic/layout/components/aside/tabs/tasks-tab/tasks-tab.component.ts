import { Component, OnInit } from '@angular/core';

type Task = {
  icon: string;
  color: 'success' | 'warning' | 'primary' | 'danger' | 'info';
  title: string;
  description: string;
  routing: string;
};

const tasks: ReadonlyArray<Task> = [
  {
    icon: './assets/media/icons/duotune/abstract/leaver.svg',
    color: 'success',
    title: 'Create Absence',
    description: 'Create Absence',
    routing: 'leave/create-absence'
  },
  {
    icon: './assets/media/icons/duotune/abstract/leaver.svg',
    color: 'warning',
    title: 'Leave Taken',
    description: 'Leave Taken',
    routing: 'leave/all-leave-taken'
  },
  {
    icon: './assets/media/icons/duotune/abstract/leaver.svg',
    color: 'primary',
    title: 'Holidays',
    description: 'Holidays',
    routing: 'leave/holidays'
  },
];

@Component({
  selector: 'app-tasks-tab',
  templateUrl: './tasks-tab.component.html',
  styleUrls: ['./tasks-tab.component.scss'],
})
export class TasksTabComponent implements OnInit {
  allTasks: ReadonlyArray<Task> = [];
  constructor() {}

  ngOnInit(): void {
    this.allTasks = tasks;
  }
}
