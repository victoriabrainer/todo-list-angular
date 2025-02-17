import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() public tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }
}
