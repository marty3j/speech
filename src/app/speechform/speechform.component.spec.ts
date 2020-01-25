import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechformComponent } from './speechform.component';

describe('SpeechformComponent', () => {
  let component: SpeechformComponent;
  let fixture: ComponentFixture<SpeechformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeechformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
