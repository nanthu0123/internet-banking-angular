import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAccountSummaryComponent } from './deposit-account-summary.component';

describe('DepositAccountSummaryComponent', () => {
  let component: DepositAccountSummaryComponent;
  let fixture: ComponentFixture<DepositAccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositAccountSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositAccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
