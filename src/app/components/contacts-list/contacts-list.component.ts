import { Component, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [],
  template: `
    <section>
      <div class="container">
        <ul>
          @for (contact of contacts(); track contact.name) {
            <li>
              <h2>{{ contact.name }}</h2>
              <div>{{ contact.email }}</div>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    section {
      padding-top: 88px;

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
        padding: 8px;
      }
    }
  `
})
export class ContactsListComponent {

  contacts = inject(ContactsService).contacts;

}
