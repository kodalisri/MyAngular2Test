import { Action } from '@ngrx/store';
import {Contact} from '../models/contact';

export const ActionTypes={
    ADD_CONTACT:'ADD_CONTACT'
}

export class AddContact implements Action {
    type = ActionTypes.ADD_CONTACT;

    constructor(public payLoad:Contact[]){};
}

export type Actions = AddContact;