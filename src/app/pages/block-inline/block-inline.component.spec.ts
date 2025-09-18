import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInlineComponent } from './block-inline.component';

describe('BlockInlineComponent', () => {
  let component: BlockInlineComponent;
  let fixture: ComponentFixture<BlockInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
