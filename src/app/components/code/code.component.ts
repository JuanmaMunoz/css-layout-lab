import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TypeLanguage } from '../../models/enums';
declare const Prism: { highlightElement: (element: HTMLElement) => void };
@Component({
  selector: 'app-code',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent implements AfterViewInit, OnChanges {
  @Input() title!: string;
  @Input() code!: string;
  @Input() language!: TypeLanguage;
  @ViewChild('codeBlock', { static: true }) codeBlock!: ElementRef<HTMLElement>;
  private firstRender = false;

  ngAfterViewInit(): void {
    this.highlightCode();
    this.firstRender = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['code'] && this.firstRender) {
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
