import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Contact } from '../../models/contact.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  template: `
    <section>
      <div class="container">
        <div class="forms-container" >
          <form (submit)="saveNewContact()" #form="ngForm">
            <div class=input-container>
              <input type="text" placeholder="Name" required name="name" 
              [(ngModel)]="name">
            </div>
            <div class=input-container>
              <input type="email" placeholder="Email" required name="email"
              [(ngModel)]="email">
            </div>
            <div class=input-container>
              <input type="text" placeholder="Phone" required name="text"
              [(ngModel)]="phone">
            </div>
            <div class="buttons">
              <button type="submit" [disabled]="form.invalid">Add New Contact</button>
              <button type="button" routerLink="/">Go Back</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: `
    section {
      padding-top: 88px;

      .forms-container {
        width: 60%;
      }

      .input-container {
        width: 100%;
        padding-bottom: 16px;

        input {
          width: 100%;
          font-family: inherit;
          -webkit-appearance: none;
          appearance: none;
          background-color: white;
          padding: 16px;
          border: 0.1rem solid var(--secondary-color);
          border-radius: 6px;
        }
      }

      .buttons {
        display: flex;
        gap: 16px;

        button[type='submit'] {
          background: var(--main-color);
          color: white;

          &:disabled {
            background: lightgrey;
          }
        }

        button {
          border: unset;
          padding: 16px;
          border-radius: 6px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  `
})
export class AddContactComponent {

  contactService = inject(ContactsService);
  router = inject(Router);

  name = '';
  email = '';
  phone = '';

  saveNewContact() {
    const payload: Contact = { name: this.name, email: this.email, phone: this.phone };
    this.contactService.addNewContact(payload);

    this.email = '';
    this.name = '';
    this.phone = '';

    this.router.navigate(['/']);
  }

}
