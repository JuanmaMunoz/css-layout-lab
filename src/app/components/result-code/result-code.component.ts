import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeLanguage } from '../../models/enums';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-result-code',
  imports: [TranslateModule, CodeComponent],
  templateUrl: './result-code.component.html',
  styleUrl: './result-code.component.scss',
})
export class ResultCodeComponent {
  @Input() htmlCode!: string;
  @Input() cssCode!: string;
  public language = TypeLanguage;
}
