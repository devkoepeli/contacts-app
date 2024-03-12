import { Component, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="container">
        <ul>
          @for (contact of contacts(); track contact.name; let i = $index) {
            <li>
              <div class="contact-info">
                <h2>{{ contact.name }}</h2>
                <div>{{ contact.email }}</div>
              </div>
              <div (click)="deleteContact(contact)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    section {
      padding-top: 88px;
      padding-bottom: 20px;

      h2 {
        font-size: 20px;
        padding-bottom: 8px;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        background-color: rgba(46, 139, 87, 0.15);
        border-radius: 4px;
        padding: 16px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          fill: black;
          width: 25px;
          height: 25px;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
  `
})
export class ContactsListComponent {

  contactsService = inject(ContactsService);
  contacts = this.contactsService.contacts;

  deleteContact(contact: Contact) {
    this.contactsService.deleteContact(contact);
  }

}
