import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeLanguage } from '../../models/enums';
declare var Prism: any;
@Component({
  selector: 'app-code',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() code!: string;
  @Input() language!: TypeLanguage;
  @ViewChild('codeBlock', { static: true }) codeBlock!: ElementRef<HTMLElement>;
  private firstRender: boolean = false;
  private isBrowser = false;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.highlightCode();
      this.firstRender = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && this.firstRender && this.isBrowser) {
      this.highlightCode();
    }
  }

  private highlightCode() {
    if (this.codeBlock?.nativeElement) {
      this.codeBlock.nativeElement.textContent = this.code ?? '';
      Prism.highlightElement(this.codeBlock.nativeElement);
    }
  }
}
