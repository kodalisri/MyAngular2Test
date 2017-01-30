import {Component} from '@angular/core';
import {State,Store} from '@ngrx/store';
import { StoreModule } from '@ngrx/store';



@Component({
    selector:'my-redux-test',
    template:`<div><input type="text"  [(ngModel)]="contact"/><button type="button" class="btn" (click)="newContact()">New Contact</button></div>
    <li *ngFor="let contact of contacts">
    {{contact}}
    </li>`

})

export class MyReduxTest {

   public contacts:Array<string>;
    public contact:string;
    

newContact():void{
    this.contacts.push(this.contact);
    this.contact="";
    // this._store.dispatch({type: ADD_CONTACTS , payload: {
    //   name:"Sricharan"
    // }});

}
}