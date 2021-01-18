import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSatusComponent } from './card-satus.component';

describe('CardSatusComponent', () => {
  let component: CardSatusComponent;
  let fixture: ComponentFixture<CardSatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
