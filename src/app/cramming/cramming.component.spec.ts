import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrammingComponent } from './cramming.component';

describe('CrammingComponent', () => {
  let component: CrammingComponent;
  let fixture: ComponentFixture<CrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
