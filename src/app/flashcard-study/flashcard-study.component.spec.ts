import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardStudyComponent } from './flashcard-study.component';

describe('FlashcardStudyComponent', () => {
  let component: FlashcardStudyComponent;
  let fixture: ComponentFixture<FlashcardStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
