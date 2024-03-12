import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts = signal<Contact[]>([
    {
      "name": "William Lee",
      "email": "kennethhernandez@gmail.com",
      "phone": "3986456509"
    },
    {
      "name": "Nicholas Shea",
      "email": "ellisonjohn@hotmail.com",
      "phone": "5790517486"
    },
    {
      "name": "Melissa Moore",
      "email": "huynhanthony@gmail.com",
      "phone": "2699633382"
    },
    {
      "name": "Catherine Ruiz",
      "email": "rcalderon@yahoo.com",
      "phone": "797.142.1038x634"
    },
    {
      "name": "Jeremy Le",
      "email": "vmontgomery@becker-ward.com",
      "phone": "148.140.4151"
    },
    {
      "name": "Nicole Parrish",
      "email": "jasonleonard@gmail.com",
      "phone": "+1-208-029-8876x5473"
    },
    {
      "name": "Rachael Payne",
      "email": "mwilliams@yahoo.com",
      "phone": "001-503-040-2333x55762"
    },
    {
      "name": "Christopher Richardson",
      "email": "matthew57@hotmail.com",
      "phone": "895.102.4636"
    },
    {
      "name": "Anthony Sanders",
      "email": "williamscarol@hotmail.com",
      "phone": "563.938.3708"
    },
    {
      "name": "Sharon Rodriguez",
      "email": "kylewalsh@yahoo.com",
      "phone": "415-903-2878x1895"
    }
  ]);

  constructor() { }

  addNewContact(contact: Contact) {
    this.contacts.update((contacts: Contact[]) => [contact, ...contacts]);
  }

  deleteContact(contact: Contact) {
    this.contacts.update((contacts: Contact[]) => contacts.filter(c => c.name !== contact.name));
  }
}
