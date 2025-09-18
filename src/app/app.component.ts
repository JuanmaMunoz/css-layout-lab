import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { Language } from './models/enums';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('content') content!: ElementRef;
  private subscription = new Subscription();

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    const lang = localStorage.getItem('language') || Language.ENGLISH;
    this.translate.use(lang);
    this.subscription.add(
      this.translate.onLangChange.subscribe((data) => {
        localStorage.setItem('language', data.lang);
      }),
    );
  }

  ngAfterViewInit(): void {
    this.subscription.add(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.content.nativeElement.scrollTop = 0;
        }),
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
