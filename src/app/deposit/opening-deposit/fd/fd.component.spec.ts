import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDComponent } from './fd.component';

describe('FDComponent', () => {
  let component: FDComponent;
  let fixture: ComponentFixture<FDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
