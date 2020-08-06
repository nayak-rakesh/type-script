import { TodoItem } from './todoItem';

export class TodoCollection {
  constructor(public nextId: number = 1, public todoItems: TodoItem[] = []) { }

  addTodoItem(task: string): number {
    while(this.getItemById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getItemById(id: number): TodoItem {
    return this.todoItems.find(item => item.id === id)
  }

  markComplete(id: number, isComplete: boolean) {
    const todoItem = this.getItemById(id);
    if(todoItem) {
      todoItem.completed = isComplete;
    }
  }
}