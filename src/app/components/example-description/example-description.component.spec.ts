import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDescriptionComponent } from './example-description.component';

describe('ExampleDescriptionComponent', () => {
  let component: ExampleDescriptionComponent;
  let fixture: ComponentFixture<ExampleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
