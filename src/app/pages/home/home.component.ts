import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ExampleBrickComponent } from '../../components/example-brick/example-brick.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-home',
  imports: [
    TranslateModule,
    ExampleBrickComponent,
    AboutMeComponent,
    SpinnerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public img = 'assets/images/cssLayoutLabReal.png';
  private router = inject(Router);

  public navigate(): void {
    this.router.navigate([`introduction`]);
  }
}
