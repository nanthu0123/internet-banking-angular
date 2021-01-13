import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningDepositComponent } from './opening-deposit.component';

describe('OpeningDepositComponent', () => {
  let component: OpeningDepositComponent;
  let fixture: ComponentFixture<OpeningDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
