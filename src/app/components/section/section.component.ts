import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ISection } from '../../models/interfaces';

@Component({
  selector: 'app-section',
  imports: [TranslateModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent implements OnInit {
  @Input() section!: ISection;
  public items!: number[];
  ngOnInit(): void {
    this.items = Array(this.section.numberItems);
  }
}
