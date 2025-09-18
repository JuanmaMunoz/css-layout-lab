import { Component } from '@angular/core';
import { DefaultElementsComponent } from '../../components/default-elements/default-elements.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { ExampleDescriptionComponent } from '../../components/example-description/example-description.component';
import { ResultCodeComponent } from '../../components/result-code/result-code.component';
import { SectionComponent } from '../../components/section/section.component';
import { TitleComponent } from '../../components/title/title.component';
import { IDefaultElements } from '../../models/interfaces';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-block-inline',
  imports: [
    TitleComponent,
    DescriptionComponent,
    SectionComponent,
    DefaultElementsComponent,
    ResultCodeComponent,
    ExampleDescriptionComponent,
  ],
  templateUrl: './block-inline.component.html',
  styleUrl: './block-inline.component.scss',
})
export class BlockInlineComponent {
  public defaultElementsBlock: IDefaultElements = {
    title: 'blockInline.block.defaultElements',
    items: [
      '<div>',
      '<p>',
      '<h1>...<h6>',
      '<section>',
      '<header>',
      '<footer>',
      '<main>',
      '<aside>',
      '<nav>',
      '<ul>',
      '<ol>',
      '<li>',
      '<form>',
      '<table>',
      '<blockquote>',
    ],
  };

  public defaultElementsInline: IDefaultElements = {
    title: 'blockInline.inline.defaultElements',
    items: [
      '<a>',
      '<abbr>',
      '<acronym>',
      '<b>',
      '<bdo>',
      '<big>',
      '<br>',
      '<cite>',
      '<code>',
      '<dfn>',
      '<em>',
      '<i>',
      '<kbd>',
      '<label>',
      '<map>',
      '<mark>',
      '<output>',
      '<q>',
      '<ruby>',
      '<rp>',
      '<rt>',
      '<s>',
      '<samp>',
      '<small>',
      '<span>',
      '<strong>',
      '<sub>',
      '<time>',
      '<tt>',
      '<u>',
      '<var>',
      '<wbr>',
    ],
  };
  public defaultElementsInlineBlock: IDefaultElements = {
    title: 'blockInline.inlineBlock.defaultElements',
    items: [
      '<button>',
      '<input>',
      '<select>',
      '<textarea>',
      '<img>',
      '<iframe>',
      '<canvas>',
      '<video>',
      '<audio>',
      '<embed>',
      '<object>',
      '<meter>',
      '<progress>',
      '<svg>',
      '<math>',
    ],
  };
  public infoBlockHtml!: string;
  public infoBlockCss!: string;
  public infoInlineHtml!: string;
  public infoInlineCss!: string;
  public infoInlineBlockHtml!: string;
  public infoInlineBlockCss!: string;

  constructor(public infoService: InfoService) {
    this.infoBlockHtml = this.infoService.getHmlBlock();
    this.infoBlockCss = this.infoService.getCssBlock();
    this.infoInlineHtml = this.infoService.getHmlInline();
    this.infoInlineCss = this.infoService.getCssInline();
    this.infoInlineBlockHtml = this.infoService.getHmlInline();
    this.infoInlineBlockCss = this.infoService.getCssInlineBlock();
  }
}
