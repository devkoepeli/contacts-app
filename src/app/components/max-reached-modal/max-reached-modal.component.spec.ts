import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxReachedModalComponent } from './max-reached-modal.component';

describe('MaxReachedModalComponent', () => {
  let component: MaxReachedModalComponent;
  let fixture: ComponentFixture<MaxReachedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxReachedModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxReachedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
