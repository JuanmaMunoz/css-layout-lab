import { Injectable } from '@angular/core';
import {
  AlignGrid,
  AlignItems,
  AutoFlow,
  ContentGrid,
  Explicit,
  FlexDirection,
  FlexWrap,
  Grid,
  Implicit,
  JustifyContent,
  JustifyGrid,
  Positioning,
} from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  public getHmlBlock(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`;
  }

  public getCssBlock(): string {
    return `.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}
.child {
  display: block;
  margin: 0.5rem;
  padding: 1rem;
}`;
  }

  public getHmlInline(): string {
    return `<div class="container">
  <span class="child">1</span>
  <span class="child">2</span>
  <span class="child">3</span>
</div>`;
  }

  public getCssInline(): string {
    return `.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}

.child {
  display: inline;
  margin-right: 1rem;
  padding: 0.5rem;
}`;
  }

  public getCssInlineBlock(): string {
    return `.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}

.child {
  display: inline-block;
  margin: 0.5rem;
  padding: 1rem;
  width: 6rem;
}`;
  }

  public getCssDirection(direction: FlexDirection): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  flex-direction: ${direction};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHmlWrap(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`;
  }

  public getCssWrap(wrap: FlexWrap): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  max-width: 10rem;
  padding: 0.5rem;
  flex-wrap: ${wrap};
}

.child {
  padding: 1rem;
}`;
  }

  public getHmlJustifyAligns(): string {
    return `<div class="container">
  <span class="child-1">1</span>
  <span class="child-2">2</span>
  <span class="child-3">3</span>
</div>`;
  }

  public getCssCodeJustifyAligns(
    justify: JustifyContent,
    align: AlignItems,
  ): string {
    return `.container {
  align-items: ${align};
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  justify-content: ${justify};
  padding: 0.5rem;
}

.child-1 {
  padding: 0.5rem;
}

.child-2 {
  padding: 1rem;
}

.child-3 {
  padding: 2rem;
}`;
  }

  public getCssCodeJustifyAlignsColumn(
    justify: JustifyContent,
    align: AlignItems,
  ): string {
    return `.container {
  align-items: ${align};
  border: 1px solid #0077aa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: ${justify};
  padding: 0.5rem;
}

.child-1 {
  padding: 0.5rem;
}

.child-2 {
  padding: 1rem;
}

.child-3 {
  padding: 2rem;
}`;
  }

  public getCssCodeGrow(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.child-1 {
  flex-grow: 0;
  padding: 1rem;
}

.child-2 {
  flex-grow: 1;
  padding: 1rem;
}

.child-3 {
  flex-grow: 2;
  padding: 1rem;
}`;
  }

  public getCssCodeShrink(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.child-1 {
  flex-shrink: 0;
  padding: 1rem;
}

.child-2 {
  flex-shrink: 1;
  padding: 1rem;
}

.child-3 {
  flex-shrink: 1;
  padding: 1rem;
}`;
  }

  public getHmlBasis(): string {
    return `<div class="container">
  <span class="child">1</span>
  <span class="child">2</span>
  <span class="child">3</span>
</div>`;
  }

  public getCssCodeBasis(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.child-1 {
  flex-basis: auto;
  padding: 1rem;
}

.child-2 {
  flex-basis: 90px;
  padding: 1rem;
}

.child-3 {
  flex-basis: 12rem;
  padding: 1rem;
}`;
  }

  public getHmlOrder(): string {
    return `<div class="container">
  <div class="child-1">1</div>
  <div class="child-2">2</div>
  <div class="child-3">3</div>
</div>`;
  }

  public getCssCodeOrder(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.child-1 {
  order:3;
  padding: 1rem;
}

.child-2 {
  order:1;
  padding: 1rem;
}

.child-3 {
  order:2;
  padding: 1rem;
}`;
  }

  //GRID
  public getHtmlGrid(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`;
  }

  public getCssGrid(grid: Grid): string {
    return `.container {
  border: 1px solid #0077aa;
  display: ${grid};
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlFixed(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`;
  }

  public getCssFixed(): string {
    return `.container {
  border: 1px solid #0077aa;
  column-gap: 0.5rem;
  display: grid;
  grid-template-columns: 100px 4rem 50px;
  grid-template-rows: 60px 6rem;
  padding: 0.5rem;
  row-gap: 1rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getCssFluid(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 1fr 2fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlImplicit(implicit: Implicit): string {
    if (implicit === Implicit.ROW) {
      return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`;
    } else {
      return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
  <div style="grid-column: 4" class="child">
    7
  </div>
</div>`;
    }
  }

  public getCssImplicit(implicit: Implicit): string {
    if (implicit === Implicit.ROW) {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 5rem;
  grid-template-columns: 50% 1fr 2fr;
  grid-template-rows: 4rem;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
    } else {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-columns: 10rem;
  grid-template-columns: 50% 1fr 2fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
    }
  }

  public getHtmlExplicit(explicit: Explicit): string {
    if (explicit === Explicit.ROW) {
      return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`;
    } else {
      return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="childk">6</div>
  <div style="grid-column: 4" class="child">
    7
  </div>
</div>`;
    }
  }

  public getCssExplicit(explicit: Explicit): string {
    if (explicit === Explicit.ROW) {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 1fr 2fr;
  grid-template-rows: 4rem;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
    } else {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 1fr 2fr;
  grid-template-rows: 4rem;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
    }
  }

  public getHtmlAutoFlow(): string {
    return `<div class="container">
  <div class="child-big">1</div>
  <div class="child">2</div>
  <div class="child-big">3</div>
  <div class="child">4</div>
</div>`;
  }

  public getCssAutoFlow(autoFlow: AutoFlow): string {
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-flow: ${autoFlow};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}
  
.child-big {
  padding: 1rem;
  grid-column: span 2;
}`;
  }

  public getHtmlPositioning(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child positioning">3</div>
  <div class="child">4</div>
</div>`;
  }

  public getCssPositioning(positioning: Positioning): string {
    if (positioning === Positioning.COLUMNROW) {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem;
}

.positioning {
  grid-column: 1 / 3; /* grid-column: col-start / col-end */
  grid-row: 1 / 3; /* grid-row: row-start / row-end */
}

.child {
  padding: 1rem;
}`;
    } else {
      return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem;
}

.positioning {
  grid-area: 1 / 3 / 3 / 3;
  /* grid-area: row-start / col-start / row-end / col-end */
}

.child {
  padding: 1rem;
}`;
    }
  }

  public getHtmlAreas(): string {
    return `<div class="container">
  <div class="header">header</div>
  <div class="body-left">body-left</div>
  <div class="body-center">body-center</div>
  <div class="body-right">body-right</div>
  <div class="footer">footer</div>
</div>`;
  }

  public getCssAreas(): string {
    return `.container-areas {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "body-left body-center body-right"
    "footer footer footer";
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 2fr 4rem 1fr;
  padding: 0.5rem;
}

.header {
  grid-area: header;
}

.body-left {
  grid-area: body-left;
}

.body-center {
  grid-area: body-center;
}

.body-right {
  grid-area: body-right;
}

.footer {
  grid-area: footer;
}`;
  }

  public getCssFunctions(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-rows: minmax(50px, auto);
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlUnits(): string {
    return `<div class="container">
  <div class="child">fr (1fr)</div>
  <div class="child">% (20%)</div>
  <div class="child">auto</div>
  <div class="child">min-content</div>
  <div class="child">max-content</div>
  <div class="child span">span</div>
</div>`;
  }

  public getCssUnits(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 20% auto min-content max-content;
  padding: 0.5rem;
}

.span {
  grid-column: span 2;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlSubGrid(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="content">
    <div class="child">4</div>
    <div class="child">5</div>
  </div>
  <div class="child">6</div>
</div>`;
  }

  public getCssSubGrid(): string {
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 2fr;
  padding: 0.5rem;
}

.content {
  display: grid;
  gap: 0.5rem;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlAlignmentContainer(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child-height">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child-height">5</div>
  <div class="child">6</div>
</div>`;
  }

  public getCssAlignmentContainer(
    justify: JustifyGrid,
    align: AlignGrid,
  ): string {
    console.log(justify, align);
    return `.container {
  align-items: ${align}
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  justify-items: ${justify};
  padding: 0.5rem;
}

.child-height {
  padding: 1rem;  
  height: 4rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlAlignmentContent(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`;
  }

  public getCssAlignmentContent(
    justify: ContentGrid,
    align: ContentGrid,
  ): string {
    console.log(justify, align);
    return `.container {
  align-content: ${align}
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  height: 150px;
  justify-content: ${justify};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlAlignmentItem(): string {
    return `<div class="container">
  <div class="child">1</div>
  <div class="child item">2</div>
  <div class="child">3</div>
</div>`;
  }

  public getCssAlignmentItem(justify: JustifyGrid, align: JustifyGrid): string {
    console.log(justify, align);
    return `.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  grid-template-rows: 6rem;
  height: 6rem;
  padding: 0.5rem;
}

.item {
  align-self: ${align}
  justify-self: ${justify};
}

.child {
  padding: 1rem;
}`;
  }

  public getHtmlBrick(): string {
    return `<div class="brick">
  Hello world!
</div>`;
  }

  public getCssBrick(): string {
    return `.brick {
  background-color: #b45309;
  background-image: linear-gradient(
      #bb6c30 1px,
      transparent 1px
    ),
    linear-gradient(#a74d08 2px, transparent 2px);
  background-position:
    0 0,
    10px 10px;
  background-size: 20px 20px;
  border-radius: 2px;
  color: #f5f2eb;
  font-weight: 600;
  padding: 3rem;
  text-align: center;
}`;
  }
}
