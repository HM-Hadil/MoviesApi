import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MovieModule {
  Title!: string;
  imageUrl!: string;
  Year: any;
  Poster: any;
  Type: any;
  imdbID: any;
}
