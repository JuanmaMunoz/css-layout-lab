import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ExampleBrickComponent } from '../../components/example-brick/example-brick.component';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, ExampleBrickComponent, AboutMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public img: string = 'assets/images/cssLayoutLabReal.png';
  constructor(private router: Router) {}

  public navigate(): void {
    this.router.navigate([`basic-concepts`]);
  }
}
