import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBrickComponent } from './example-brick.component';

describe('ExampleBrickComponent', () => {
  let component: ExampleBrickComponent;
  let fixture: ComponentFixture<ExampleBrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleBrickComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleBrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
