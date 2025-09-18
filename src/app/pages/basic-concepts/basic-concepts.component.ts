import { Component } from '@angular/core';
import { BoxInfoComponent } from '../../components/box-info/box-info.component';
import { ContainerInfoComponent } from '../../components/container-info/container-info.component';
import { DescriptionComponent } from '../../components/description/description.component';
import { SectionComponent } from '../../components/section/section.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-basic-concepts',
  imports: [
    TitleComponent,
    DescriptionComponent,
    SectionComponent,
    BoxInfoComponent,
    ContainerInfoComponent,
  ],
  templateUrl: './basic-concepts.component.html',
  styleUrl: './basic-concepts.component.scss',
})
export class BasicConceptsComponent {}
