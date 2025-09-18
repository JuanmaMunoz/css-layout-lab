import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-container-info',
  imports: [TranslateModule],
  templateUrl: './container-info.component.html',
  styleUrl: './container-info.component.scss',
})
export class ContainerInfoComponent {
  public childs = Array(3);
}
