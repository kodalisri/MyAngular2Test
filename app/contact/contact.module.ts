import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ContactService } from './contacts.service'
import {ContactsComponent} from './contacts.component'


@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ContactsComponent],
  exports:      [ ContactsComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }