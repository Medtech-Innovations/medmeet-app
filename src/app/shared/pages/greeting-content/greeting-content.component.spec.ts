import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingContentComponent } from './greeting-content.component';

describe('GreetingContentComponent', () => {
  let component: GreetingContentComponent;
  let fixture: ComponentFixture<GreetingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
