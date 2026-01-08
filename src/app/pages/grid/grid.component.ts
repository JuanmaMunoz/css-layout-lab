import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DescriptionComponent } from '../../components/description/description.component';
import { ExampleDescriptionComponent } from '../../components/example-description/example-description.component';
import { ResultCodeComponent } from '../../components/result-code/result-code.component';
import { SectionComponent } from '../../components/section/section.component';
import { SelectComponent } from '../../components/select/select.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { TitleComponent } from '../../components/title/title.component';
import {
  AlignGrid,
  AutoFlow,
  ContentGrid,
  Explicit,
  Grid,
  Implicit,
  JustifyGrid,
  Positioning,
} from '../../models/enums';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-grid',
  imports: [
    TitleComponent,
    DescriptionComponent,
    SectionComponent,
    ExampleDescriptionComponent,
    ResultCodeComponent,
    SelectComponent,
    CommonModule,
    SpinnerComponent,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  public grid: Grid = Grid.GRID;

  public gridCss!: string;
  public gridHtml!: string;
  public selecGrid: Grid[] = [Grid.GRID, Grid.INLINEGRID];
  public fixedGridCss!: string;
  public fixedGridHtml!: string;
  public fluidGridCss!: string;
  public fluidGridHtml!: string;
  public selecImplicit: Implicit[] = [Implicit.ROW, Implicit.COLUMN];
  public implicit: Implicit = Implicit.ROW;
  public explicit: Explicit = Explicit.ROW;
  public selecExplicit: Explicit[] = [Explicit.ROW, Explicit.COLUMN];
  public enumImplicit = Implicit;
  public enumExplicit = Explicit;
  public implicitGridCss!: string;
  public implicitHtml!: string;
  public explicitGridCss!: string;
  public explicitHtml!: string;
  public autoFlow: AutoFlow = AutoFlow.ROW;
  public selectAutoFlow: AutoFlow[] = [
    AutoFlow.ROW,
    AutoFlow.COLUMN,
    AutoFlow.DENSE,
  ];
  public enumAutoFlow = AutoFlow;
  public autoFlowGridCss!: string;
  public autoFlowHtml!: string;
  public positioningGridCss!: string;
  public positioning: Positioning = Positioning.COLUMNROW;
  public enumPositioning = Positioning;
  public positioningHtml!: string;
  public selecPositioning: Positioning[] = [
    Positioning.COLUMNROW,
    Positioning.AREA,
  ];

  public areasHtml!: string;
  public areasCss!: string;
  public functionsHtml!: string;
  public functionsCss!: string;
  public unitsHtml!: string;
  public unitsCss!: string;
  public subgridHtml!: string;
  public subgridCss!: string;
  public justify: JustifyGrid = JustifyGrid.STRETCH;
  public align: AlignGrid = AlignGrid.STRETCH;
  public alignmentContainerHtml!: string;
  public alignmentContainerCss!: string;
  public selectJustify: JustifyGrid[] = [
    JustifyGrid.STRETCH,
    JustifyGrid.START,
    JustifyGrid.CENTER,
    JustifyGrid.END,
  ];
  public selectAlign: AlignGrid[] = [
    AlignGrid.STRETCH,
    AlignGrid.START,
    AlignGrid.CENTER,
    AlignGrid.END,
  ];

  public justifyContent: ContentGrid = ContentGrid.STRETCH;
  public alignContent: ContentGrid = ContentGrid.STRETCH;
  public alignContentHtml!: string;
  public alignContentCss!: string;
  public selectJustifyContent: ContentGrid[] = [
    ContentGrid.STRETCH,
    ContentGrid.START,
    ContentGrid.CENTER,
    ContentGrid.END,
    ContentGrid.SPACEAROUND,
    ContentGrid.SPACEBETWEEN,
    ContentGrid.SPACEEVENLY,
  ];
  public selectAlignContent: ContentGrid[] = [
    ContentGrid.STRETCH,
    ContentGrid.START,
    ContentGrid.CENTER,
    ContentGrid.END,
    ContentGrid.SPACEAROUND,
    ContentGrid.SPACEBETWEEN,
    ContentGrid.SPACEEVENLY,
  ];

  public justifyItem: JustifyGrid = JustifyGrid.STRETCH;
  public alignItem: JustifyGrid = JustifyGrid.STRETCH;
  public alignItemtHtml!: string;
  public alignItemCss!: string;
  public selectJustifyItem: JustifyGrid[] = [
    JustifyGrid.STRETCH,
    JustifyGrid.START,
    JustifyGrid.CENTER,
    JustifyGrid.END,
  ];
  public selectAlignItem: AlignGrid[] = [
    AlignGrid.STRETCH,
    AlignGrid.START,
    AlignGrid.CENTER,
    AlignGrid.END,
  ];

  private infoService = inject(InfoService);
  ngOnInit(): void {
    this.changeGrid(this.grid);
    this.fixedGridHtml = this.infoService.getHtmlFixed();
    this.fixedGridCss = this.infoService.getCssFixed();
    this.fluidGridHtml = this.infoService.getHtmlFixed();
    this.fluidGridCss = this.infoService.getCssFluid();
    this.changeImplicit(this.implicit);
    this.changeExplicit(this.explicit);
    this.changeAutoFlow(this.autoFlow);
    this.changePositioning(this.positioning);
    this.areasHtml = this.infoService.getHtmlAreas();
    this.areasCss = this.infoService.getCssAreas();
    this.functionsHtml = this.infoService.getHtmlGrid();
    this.functionsCss = this.infoService.getCssFunctions();
    this.unitsHtml = this.infoService.getHtmlUnits();
    this.unitsCss = this.infoService.getCssUnits();
    this.subgridHtml = this.infoService.getHtmlSubGrid();
    this.subgridCss = this.infoService.getCssSubGrid();
    this.alignmentContainerCss = this.infoService.getCssAlignmentContainer(
      this.justify,
      this.align,
    );
    this.alignmentContainerHtml = this.infoService.getHtmlAlignmentContainer();

    this.alignContentCss = this.infoService.getCssAlignmentContent(
      this.justifyContent,
      this.alignContent,
    );
    this.alignContentHtml = this.infoService.getHtmlAlignmentContent();

    this.alignItemCss = this.infoService.getCssAlignmentItem(
      this.justifyItem,
      this.alignItem,
    );
    this.alignItemtHtml = this.infoService.getHtmlAlignmentItem();
  }

  public changeGrid(grid: string): void {
    this.grid = grid as Grid;
    this.gridCss = this.infoService.getCssGrid(this.grid);
    this.gridHtml = this.infoService.getHtmlGrid();
  }
  public changeImplicit(implicit: string): void {
    this.implicit = implicit as Implicit;
    this.implicitGridCss = this.infoService.getCssImplicit(this.implicit);
    this.implicitHtml = this.infoService.getHtmlImplicit(this.implicit);
  }

  public changeExplicit(explicit: string): void {
    this.explicit = explicit as Explicit;
    this.explicitGridCss = this.infoService.getCssExplicit(this.explicit);
    this.explicitHtml = this.infoService.getHtmlExplicit(this.explicit);
  }

  public changeAutoFlow(autoFlow: string): void {
    this.autoFlow = autoFlow as AutoFlow;
    this.autoFlowGridCss = this.infoService.getCssAutoFlow(this.autoFlow);
    this.autoFlowHtml = this.infoService.getHtmlAutoFlow();
  }

  public changePositioning(positioning: string): void {
    this.positioning = positioning as Positioning;
    this.positioningGridCss = this.infoService.getCssPositioning(
      this.positioning,
    );
    this.positioningHtml = this.infoService.getHtmlPositioning();
  }

  public changeJustify(justify: string): void {
    this.justify = justify as JustifyGrid;
    this.alignmentContainerCss = this.infoService.getCssAlignmentContainer(
      this.justify,
      this.align,
    );
  }

  public changeAlign(align: string): void {
    this.align = align as AlignGrid;
    this.alignmentContainerCss = this.infoService.getCssAlignmentContainer(
      this.justify,
      this.align,
    );
  }

  public changeJustifyContent(justify: string): void {
    this.justifyContent = justify as ContentGrid;
    this.alignContentCss = this.infoService.getCssAlignmentContent(
      this.justifyContent,
      this.alignContent,
    );
  }

  public changeAlignContent(align: string): void {
    this.alignContent = align as ContentGrid;
    this.alignContentCss = this.infoService.getCssAlignmentContent(
      this.justifyContent,
      this.alignContent,
    );
  }

  public changeJustifyItem(justify: string): void {
    this.justifyItem = justify as JustifyGrid;
    this.alignItemCss = this.infoService.getCssAlignmentItem(
      this.justifyItem,
      this.alignItem,
    );
  }
  public changeAlignItem(align: string): void {
    this.alignItem = align as JustifyGrid;
    this.alignItemCss = this.infoService.getCssAlignmentItem(
      this.justifyItem,
      this.alignItem,
    );
  }
}
