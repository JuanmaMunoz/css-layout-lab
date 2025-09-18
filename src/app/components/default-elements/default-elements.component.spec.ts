import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultElementsComponent } from './default-elements.component';

describe('DefaultElementsComponent', () => {
  let component: DefaultElementsComponent;
  let fixture: ComponentFixture<DefaultElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
