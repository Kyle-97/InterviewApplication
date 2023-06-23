export class UserPermission {
    code: string;
    label: string;

    constructor(init?: Partial<UserPermission>) {
        Object.assign(this, init);
    }
}