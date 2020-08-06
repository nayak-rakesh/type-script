export class TodoItem {
    constructor(
        public id: number,
        public task: string,
        public completed: boolean = false,
    ) {}

    printDetails(): void {
        // tslint:disable-next-line: no-console
        console.log(`${this.id}. ${this.task} is ${this.completed ? 'completed' : 'incomplete'}`);
    }
}