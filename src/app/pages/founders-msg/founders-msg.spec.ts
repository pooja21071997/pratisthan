import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersMsg } from './founders-msg';

describe('FoundersMsg', () => {
  let component: FoundersMsg;
  let fixture: ComponentFixture<FoundersMsg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundersMsg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundersMsg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
