import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IDefaultElements } from '../../models/interfaces';

@Component({
  selector: 'app-default-elements',
  imports: [TranslateModule],
  templateUrl: './default-elements.component.html',
  styleUrl: './default-elements.component.scss',
})
export class DefaultElementsComponent {
  @Input() defaulElements!: IDefaultElements;
}
