import {
  afterNextRender,
  AfterViewInit,
  Component,
  ElementRef,
  EnvironmentInjector,
  inject,
  OnDestroy,
  OnInit,
  runInInjectionContext,
  ViewChild,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Language } from './models/enums';
import { showApp } from './utils/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  animations: [showApp(500)],
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('content') content!: ElementRef;
  private subscription = new Subscription();
  private router = inject(Router);
  private translate = inject(TranslateService);
  private envInjector = inject(EnvironmentInjector);

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
    runInInjectionContext(this.envInjector, () => {
      afterNextRender(() => {
        this.router.events
          .pipe(filter((event) => event instanceof NavigationEnd))
          .subscribe(() => {
            if (this.content) {
              this.content.nativeElement.scrollTop = 0;
            }
          });
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
