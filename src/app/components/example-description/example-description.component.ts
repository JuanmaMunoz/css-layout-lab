import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-example-description',
  imports: [TranslateModule],
  templateUrl: './example-description.component.html',
  styleUrl: './example-description.component.scss',
})
export class ExampleDescriptionComponent {
  @Input() title!: string;
  @Input() description!: string;
}
