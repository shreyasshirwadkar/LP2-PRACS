import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName = '';
  taskEdit = '';
  editId: number | null = null;

  tasks = [
    { id: 1, name: 'Learn Angular', completed: false },
    { id: 2, name: 'Finish W12', completed: false }
  ];

  addTask() {
    if (this.taskName.trim()) {
      this.tasks.push({
        id: Date.now(),
        name: this.taskName.trim(),
        completed: false
      });
      this.taskName = '';
    }
  }

  editTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      this.taskEdit = task.name;
      this.editId = id;
    }
  }

  saveEdit() {
    const task = this.tasks.find(t => t.id === this.editId);
    if (task) {
      task.name = this.taskEdit;
      this.editId = null;
      this.taskEdit = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleCompleted(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
