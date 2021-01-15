import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNewCardComponent } from './apply-new-card.component';

describe('ApplyNewCardComponent', () => {
  let component: ApplyNewCardComponent;
  let fixture: ComponentFixture<ApplyNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyNewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
