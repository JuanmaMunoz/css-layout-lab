import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-about-me',
  imports: [TranslateModule, PhotoComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
