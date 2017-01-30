import {Contact} from '../models/contact';
import * as contact from '../Actions/contacts';


interface State {
contacts:string []
}

const initialState:State = {
    contacts:[]
};

export function reducer(State=initialState,action: contact.Actions){
    switch(action.type)
    {
        case contact.ActionTypes.ADD_CONTACT:
            const contacts =action.payLoad;
             return Object.assign({},State,contacts);
        default:
        return State;
    }

}



