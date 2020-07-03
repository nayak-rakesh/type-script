export class TodoItem {
    constructor(
        public id: number,
        public task: string,
        public complete: boolean = false,
    ) {}

    printDetails(): void {
        // tslint:disable-next-line: no-console
        console.log(`${this.id}. ${this.task} is ${this.complete ? 'completed' : 'incomplete'}`);
    }
}