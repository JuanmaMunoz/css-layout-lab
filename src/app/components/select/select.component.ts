import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-select',
  imports: [TranslateModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() label!: string;
  @Input() items: string[] = [];
  @Output() actionSelect: EventEmitter<string> = new EventEmitter();

  public changeSelect(event: Event): void {
    this.actionSelect.emit((event.target as HTMLSelectElement).value as string);
  }
}
