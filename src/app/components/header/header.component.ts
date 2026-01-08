import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { fromEvent, Subscription } from 'rxjs';
import { Language } from '../../models/enums';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('menu') menu!: ElementRef;
  private subscription = new Subscription();
  public lang = 'en';
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.subscription.add(
      this.translateService.onLangChange.subscribe((data) => {
        this.setLang(data.lang as Language);
      }),
    );

    this.subscription.add(
      fromEvent(window, 'click').subscribe((e) => {
        const target = e.target as HTMLElement;
        if (
          !target!.classList.contains('menu') &&
          !target!.classList.contains('bi-list')
        ) {
          this.menu.nativeElement.classList.remove('header__menu--visible');
        }
      }),
    );
  }

  setLang(lang: Language): void {
    this.lang = lang === Language.SPANISH ? 'es' : 'en';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public showHideMenu(): void {
    const element = this.menu.nativeElement;
    if (element.classList.contains('header__menu--visible')) {
      this.menu.nativeElement.classList.remove('header__menu--visible');
    } else {
      this.menu.nativeElement.classList.add('header__menu--visible');
    }
  }

  public changeLanguage(): void {
    const lang =
      this.translateService.currentLang === Language.ENGLISH
        ? Language.SPANISH
        : Language.ENGLISH;
    this.translateService.use(lang);
  }
}
