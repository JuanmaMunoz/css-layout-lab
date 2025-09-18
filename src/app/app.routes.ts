import { Routes } from '@angular/router';
import { BasicConceptsComponent } from './pages/basic-concepts/basic-concepts.component';
import { BlockInlineComponent } from './pages/block-inline/block-inline.component';
import { FlexComponent } from './pages/flex/flex.component';
import { GridComponent } from './pages/grid/grid.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basic-concepts',
    component: BasicConceptsComponent,
  },
  {
    path: 'block&inline',
    component: BlockInlineComponent,
  },
  {
    path: 'flex',
    component: FlexComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: '**',
    redirectTo: 'en/home',
  },
];
