import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPowered } from './ai-powered';

describe('AiPowered', () => {
  let component: AiPowered;
  let fixture: ComponentFixture<AiPowered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPowered]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPowered);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
