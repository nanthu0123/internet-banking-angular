import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostCardComplaintComponent } from './lost-card-complaint.component';

describe('LostCardComplaintComponent', () => {
  let component: LostCardComplaintComponent;
  let fixture: ComponentFixture<LostCardComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostCardComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostCardComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
