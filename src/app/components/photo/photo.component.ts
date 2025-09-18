import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [CommonModule],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  public img: string = 'assets/images/photo.jpg';
}
