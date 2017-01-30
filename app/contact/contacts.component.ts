import {Component,OnInit} from '@angular/core';
import { Contact, ContactService } from './contacts.service';
import { UserService }    from '../user.service';

@Component({
    moduleId: module.id,
    selector:'my-contacts',
    templateUrl:'./contacts.component.html'
})

 export class ContactsComponent {
     constructor(private contactService: ContactService, userService: UserService) {
    this.userName = userService.userName;
  }

      contact:  Contact;
  contacts: Contact[];
  msg = 'Loading contacts ...';
  userName = '';

ngOnInit():void {
    this.contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });


}

newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

    displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }
}