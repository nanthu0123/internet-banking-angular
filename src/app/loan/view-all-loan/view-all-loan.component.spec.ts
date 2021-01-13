import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLoanComponent } from './view-all-loan.component';

describe('ViewAllLoanComponent', () => {
  let component: ViewAllLoanComponent;
  let fixture: ComponentFixture<ViewAllLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
