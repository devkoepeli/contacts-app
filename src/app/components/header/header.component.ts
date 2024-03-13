import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <div class="container">
        <div class="header-container">
          <h1>My Contacts ({{ this.totalContacts() }})</h1>
          <button (click)="addContact()" [disabled]="maxReached()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    header {
      background-color: seagreen;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
      padding-top: 16px;
      padding-bottom: 16px;

      .header-container {
        display: flex;
        justify-content: space-between;
      }

      h1 {
        color: white;
        font-size: 24px;
      }

      button:not([disabled]) {
        background-color: transparent;
        border: unset;
        cursor: pointer;

        svg {
          display: block;
          fill: white;
          width: 30px;
          height: 30px;
          transition: all .1s ease-in-out;

          &:hover {
            transform: scale(1.1);
          }

          &:active {
            transform: scale(0.95);
          }
        }
      }
    }
  `
})
export class HeaderComponent {
  router = inject(Router);

  contactsService = inject(ContactsService);
  totalContacts = this.contactsService.totalContacts;
  maxReached = this.contactsService.maxReached;

  addContact() {
    this.router.navigate(['/add-contact']);
  }
}
