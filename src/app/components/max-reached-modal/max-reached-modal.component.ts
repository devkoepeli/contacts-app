import { Component, EventEmitter, OnDestroy, Output, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-max-reached-modal',
  standalone: true,
  imports: [],
  template: `
    <div class="max-info">
      <div>
        <p>
            Maximum of 12 contacts reached! <br><br> please delete first a contact
        </p>
        <button (click)="changeModalState()">Ok, got it!</button>
      </div>
    </div>
  `,
  styles: `
    .max-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.2);
      animation: fadeIn .2s backwards;

      @keyframes fadeIn {
        from {
          opacity: 0;
        } 
        to {
         opacity: 1; 
        }
      }

      div {
        background-color: white;
        padding: 32px;
        border-radius: 8px;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      p {
        padding-bottom: 16px;
      }

      button {
        background-color: var(--main-color);
        padding: 12px 16px;
        border: unset;
        cursor: pointer;
        border-radius: 4px;
        color: white;
      }
    }
  `
})
export class MaxReachedModalComponent {

  @Output() modalClosed = new EventEmitter<boolean>();

  changeModalState() {
    this.modalClosed.emit(true);
  }

}
