import{Ab as w,Bb as k,Fa as p,Ia as m,M as o,Sa as v,Ta as h,Xa as s,Y as g,Ya as a,bb as u,fb as f,gb as b,hb as x,jb as n,kb as t,pb as C,qb as y,wa as l}from"./chunk-FDKYN3UF.js";var E=["codeBlock"];function G(e,i){if(e&1&&(s(0,"h5",2),n(1),C(2,"translate"),a()),e&2){let d=u();l(),t(y(2,1,d.title))}}var A=class e{title;code;language;codeBlock;firstRender=!1;ngAfterViewInit(){this.highlightCode(),this.firstRender=!0}ngOnChanges(i){i.code&&this.firstRender&&this.highlightCode()}highlightCode(){this.codeBlock?.nativeElement&&(this.codeBlock.nativeElement.textContent=this.code??"",Prism.highlightElement(this.codeBlock.nativeElement))}static \u0275fac=function(d){return new(d||e)};static \u0275cmp=p({type:e,selectors:[["app-code"]],viewQuery:function(d,r){if(d&1&&f(E,7),d&2){let c;b(c=x())&&(r.codeBlock=c.first)}},inputs:{title:"title",code:"code",language:"language"},features:[g],decls:6,vars:4,consts:[["codeBlock",""],[1,"code","mt-4"],[1,"code__title","blue","mb-1"]],template:function(d,r){d&1&&(s(0,"div",1),m(1,G,3,3,"h5",2),s(2,"pre")(3,"code",null,0),n(5),a()()()),d&2&&(l(),h(r.title?1:-1),l(2),v(r.language),l(2),t(r.code))},dependencies:[k,w],styles:["code[class*=language-][_ngcontent-%COMP%], pre[class*=language-][_ngcontent-%COMP%]{margin:0;padding:0}@media (max-width: 576px){code[class*=language-][_ngcontent-%COMP%], pre[class*=language-][_ngcontent-%COMP%]{font-size:.8rem!important}}"]})};var H=class e{getHmlBlock(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>`}getCssBlock(){return`.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}
.child {
  display: block;
  margin: 0.5rem;
  padding: 1rem;
}`}getHmlInline(){return`<div class="container">
  <span class="child">1</span>
  <span class="child">2</span>
  <span class="child">3</span>
</div>`}getCssInline(){return`.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}

.child {
  display: inline;
  margin-right: 1rem;
  padding: 0.5rem;
}`}getCssInlineBlock(){return`.container {
  border: 1px solid #0077aa;
  padding: 0.5rem;
}

.child {
  display: inline-block;
  margin: 0.5rem;
  padding: 1rem;
  width: 2rem;
}`}getCssDirection(i){return`.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  flex-direction: ${i};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHmlWrap(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
</div>`}getCssWrap(i){return`.container {
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  max-width: 10rem;
  padding: 0.5rem;
  flex-wrap: ${i};
}

.child {
  padding: 1rem;
}`}getHmlJustifyAligns(){return`<div class="container">
  <span class="child-1">1</span>
  <span class="child-2">2</span>
  <span class="child-3">3</span>
</div>`}getHtmlCodeShrink(){return`<div class="container">
  <span class="child-1">This is an example</span>
  <span class="child-2">This is an example</span>
  <span class="child-3">This is an example</span>
</div>`}getCssCodeJustifyAligns(i,d){return`.container {
  align-items: ${d};
  border: 1px solid #0077aa;
  display: flex;
  gap: 1rem;
  height: 6rem;
  justify-content: ${i};
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
}`}getCssCodeJustifyAlignsColumn(i,d){return`.container {
  align-items: ${d};
  border: 1px solid #0077aa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 15rem;
  justify-content: ${i};
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
}`}getCssCodeGrow(){return`.container {
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
}`}getCssCodeShrink(){return`.container {
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
}`}getHmlBasis(){return`<div class="container">
  <span class="child">1</span>
  <span class="child">2</span>
  <span class="child">3</span>
</div>`}getCssCodeBasis(){return`.container {
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
}`}getHmlOrder(){return`<div class="container">
  <div class="child-1">1</div>
  <div class="child-2">2</div>
  <div class="child-3">3</div>
</div>`}getCssCodeOrder(){return`.container {
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
}`}getHtmlGrid(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`}getCssGrid(i){return`.container {
  border: 1px solid #0077aa;
  display: ${i};
  gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlFixed(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`}getCssFixed(){return`.container {
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
}`}getCssFluid(){return`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 50% 1fr 2fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlImplicit(i){return i==="rows"?`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`:`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
  <div style="grid-column: 4" class="child">
    7
  </div>
</div>`}getCssImplicit(i){return i==="rows"?`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 5rem;
  grid-template-columns: 20% 1fr 2fr;
  grid-template-rows: 4rem;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`:`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-columns: 5rem;
  grid-template-columns: 20% 1fr 2fr;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlExplicit(i){return i==="example row"?`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`:`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="childk">6</div>
  <div style="grid-column: 4" class="child">
    7
  </div>
</div>`}getCssExplicit(i){return i==="example row",`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: 20% 1fr 2fr;
  grid-template-rows: 4rem;
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlAutoFlow(){return`<div class="container">
  <div class="child-big">1</div>
  <div class="child">2</div>
  <div class="child-big">3</div>
  <div class="child">4</div>
</div>`}getCssAutoFlow(i){return`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-flow: ${i};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}
  
.child-big {
  padding: 1rem;
  grid-column: span 2;
}`}getHtmlPositioning(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child positioning">3</div>
  <div class="child">4</div>
</div>`}getCssPositioning(i){return i==="grid-column / grid-row"?`.container {
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
}`:`.container {
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
}`}getHtmlAreas(){return`<div class="container">
  <div class="header">header</div>
  <div class="body-left">left</div>
  <div class="body-center">center</div>
  <div class="body-right">right</div>
  <div class="footer">footer</div>
</div>`}getCssAreas(){return`.container-areas {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header header header"
    "body-left body-center body-right"
    "footer footer footer";
  grid-template-columns: 75px 1fr 75px;
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
}`}getCssFunctions(){return`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-auto-rows: minmax(50px, auto);
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlUnits(){return`<div class="container">
  <div class="child">1fr</div>
  <div class="child">20%</div>
  <div class="child">auto</div>
  <div class="child">min-content</div>
  <div class="child">max-content</div>
  <div class="child span">span</div>
</div>`}getCssUnits(){return`.container {
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
}`}getHtmlSubGrid(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="content">
    <div class="child">4</div>
    <div class="child">5</div>
  </div>
  <div class="child">6</div>
</div>`}getCssSubGrid(){return`.container {
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
}`}getHtmlAlignmentContainer(){return`<div class="container">
  <div class="child">1</div>
  <div class="child-big">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child-big">5</div>
  <div class="child">6</div>
</div>`}getCssAlignmentContainer(i,d){return console.log(i,d),`.container {
  align-items: ${d};
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  justify-items: ${i};
  padding: 0.5rem;
}

.child-big {
  padding: 2rem;  
}

.child {
  padding: 1rem;
}`}getHtmlAlignmentContent(){return`<div class="container">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="child">4</div>
  <div class="child">5</div>
  <div class="child">6</div>
</div>`}getCssAlignmentContent(i,d){return console.log(i,d),`.container {
  align-content: ${d};
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  height: 150px;
  justify-content: ${i};
  padding: 0.5rem;
}

.child {
  padding: 1rem;
}`}getHtmlAlignmentItem(){return`<div class="container">
  <div class="child">1</div>
  <div class="child item">2</div>
  <div class="child">3</div>
</div>`}getCssAlignmentItem(i,d){return console.log(i,d),`.container {
  border: 1px solid #0077aa;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto auto auto;
  grid-template-rows: 6rem;
  height: 6rem;
  padding: 0.5rem;
}

.item {
  align-self: ${d};
  justify-self: ${i};
}

.child {
  padding: 1rem;
}`}getHtmlBrick(){return`<div class="brick">
  Hello world!
</div>`}getCssBrick(){return`.brick {
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
}`}static \u0275fac=function(d){return new(d||e)};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};export{A as a,H as b};
