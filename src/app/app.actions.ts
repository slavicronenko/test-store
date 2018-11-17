import { Action } from '@ngrx/store';

export class TestAction implements Action {
    public static readonly TYPE = '[app] test action';
    public type = TestAction.TYPE;

    constructor(public payload?: any) {}
}
