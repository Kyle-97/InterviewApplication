export class TaskSummary {
    id: number;
    name: string;
    description: string;
    userAssignment: number;

    constructor(init?: Partial<TaskSummary>) {
        Object.assign(this, init);
    }
}