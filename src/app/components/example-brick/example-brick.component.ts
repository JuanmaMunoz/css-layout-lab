import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeLanguage } from '../../models/enums';
import { InfoService } from '../../services/info.service';
import { CodeComponent } from '../code/code.component';

@Component({
  selector: 'app-example-brick',
  imports: [TranslateModule, CodeComponent],
  templateUrl: './example-brick.component.html',
  styleUrl: './example-brick.component.scss',
})
export class ExampleBrickComponent implements OnInit {
  public language = TypeLanguage;
  public cssBrick!: string;
  public htmlBrick!: string;
  private infoService = inject(InfoService);
  ngOnInit(): void {
    this.cssBrick = this.infoService.getCssBrick();
    this.htmlBrick = this.infoService.getHtmlBrick();
  }
}
