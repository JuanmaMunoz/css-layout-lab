import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DescriptionComponent } from '../../components/description/description.component';
import { SectionComponent } from '../../components/section/section.component';
import { TitleComponent } from '../../components/title/title.component';
import {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  TypeLanguage,
} from '../../models/enums';

import { ExampleDescriptionComponent } from '../../components/example-description/example-description.component';
import { ResultCodeComponent } from '../../components/result-code/result-code.component';
import { SelectComponent } from '../../components/select/select.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { InfoService } from './../../services/info.service';

@Component({
  selector: 'app-flex',
  imports: [
    TitleComponent,
    DescriptionComponent,
    SectionComponent,
    TranslateModule,
    CommonModule,
    ExampleDescriptionComponent,
    SelectComponent,
    ResultCodeComponent,
    SpinnerComponent,
  ],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.scss',
})
export class FlexComponent implements OnInit {
  public selectDirection: FlexDirection[] = [
    FlexDirection.ROW,
    FlexDirection.ROWREVERSE,
    FlexDirection.COLUMN,
    FlexDirection.COLUMNREVERSE,
  ];
  public enumTypeLanguage = TypeLanguage;
  public direction: FlexDirection = FlexDirection.ROW;
  public htmlCodeDirection!: string;
  public cssCodeDirection!: string;

  public selectWrap: FlexWrap[] = [
    FlexWrap.NOWRAP,
    FlexWrap.WRAP,
    FlexWrap.WRAPREVERSE,
  ];
  public wrap: FlexWrap = FlexWrap.NOWRAP;
  public htmlCodeWrap!: string;
  public cssCodeWrap!: string;

  public selectJustify: JustifyContent[] = [
    JustifyContent.FLEXSTART,
    JustifyContent.CENTER,
    JustifyContent.FLEXEND,
    JustifyContent.SPACEBETWEEN,
    JustifyContent.SPACEAROUND,
    JustifyContent.SPACEEVENLY,
  ];

  public selectAligns: AlignItems[] = [
    AlignItems.STRETCH,
    AlignItems.FLEXSTART,
    AlignItems.CENTER,
    AlignItems.FLEXEND,
    AlignItems.BASELINE,
  ];

  public selectAlignsColumn: AlignItems[] = [
    AlignItems.STRETCH,
    AlignItems.FLEXSTART,
    AlignItems.CENTER,
    AlignItems.FLEXEND,
  ];

  public aligns: AlignItems = AlignItems.STRETCH;
  public justify: JustifyContent = JustifyContent.FLEXSTART;
  public htmlCodeJustify!: string;
  public cssCodeJustify!: string;

  public alignsColumn: AlignItems = AlignItems.STRETCH;
  public justifyColumn: JustifyContent = JustifyContent.FLEXSTART;
  public htmlCodeJustifyColumn!: string;
  public cssCodeJustifyColumn!: string;

  public htmlCodeGrow!: string;
  public cssCodeGrow!: string;

  public htmlCodeShrink!: string;
  public cssCodeShrink!: string;

  public htmlCodeBasis!: string;
  public cssCodeBasis!: string;

  public htmlCodeOrder!: string;
  public cssCodeOrder!: string;

  private infoService = inject(InfoService);
  ngOnInit(): void {
    this.htmlCodeDirection = this.infoService.getHmlBlock();
    this.cssCodeDirection = this.infoService.getCssDirection(this.direction);
    this.htmlCodeWrap = this.infoService.getHmlWrap();
    this.cssCodeWrap = this.infoService.getCssWrap(this.wrap);
    this.htmlCodeJustify = this.infoService.getHmlJustifyAligns();
    this.cssCodeJustify = this.infoService.getCssCodeJustifyAligns(
      this.justify,
      this.aligns,
    );
    this.htmlCodeJustifyColumn = this.infoService.getHmlJustifyAligns();
    this.cssCodeJustifyColumn = this.infoService.getCssCodeJustifyAlignsColumn(
      this.justifyColumn,
      this.alignsColumn,
    );

    this.htmlCodeGrow = this.infoService.getHmlJustifyAligns();
    this.cssCodeGrow = this.infoService.getCssCodeGrow();

    this.htmlCodeShrink = this.infoService.getHtmlCodeShrink();
    this.cssCodeShrink = this.infoService.getCssCodeShrink();

    this.htmlCodeBasis = this.infoService.getHmlBasis();
    this.cssCodeBasis = this.infoService.getCssCodeBasis();

    this.htmlCodeOrder = this.infoService.getHmlOrder();
    this.cssCodeOrder = this.infoService.getCssCodeOrder();
  }

  public changeDirection(direction: string): void {
    this.direction = direction as FlexDirection;
    this.cssCodeDirection = this.infoService.getCssDirection(this.direction);
  }

  public changeWrap(wrap: string): void {
    this.wrap = wrap as FlexWrap;
    this.cssCodeWrap = this.infoService.getCssWrap(this.wrap);
  }

  public changeJustify(justify: string): void {
    this.justify = justify as JustifyContent;
    this.cssCodeJustify = this.infoService.getCssCodeJustifyAligns(
      this.justify,
      this.aligns,
    );
  }

  public changeAligns(align: string): void {
    this.aligns = align as AlignItems;
    this.cssCodeJustify = this.infoService.getCssCodeJustifyAligns(
      this.justify,
      this.aligns,
    );
  }

  public changeJustifyColumn(justify: string): void {
    this.justifyColumn = justify as JustifyContent;
    this.cssCodeJustifyColumn = this.infoService.getCssCodeJustifyAlignsColumn(
      this.justifyColumn,
      this.alignsColumn,
    );
  }

  public changeAlignsColumn(align: string): void {
    this.alignsColumn = align as AlignItems;
    this.cssCodeJustifyColumn = this.infoService.getCssCodeJustifyAlignsColumn(
      this.justifyColumn,
      this.alignsColumn,
    );
  }
}
