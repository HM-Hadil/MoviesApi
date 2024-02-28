import { SearchBarComponent } from '../components/search-bar/search-bar.component';

import { Component, OnInit, Injector } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { GridImagesComponent } from '../components/grid-images/grid-images.component';

@Component({
  selector: 'app-movies-content',
  standalone: true,
  imports: [SearchBarComponent,PaginationComponent,GridImagesComponent],
  templateUrl: './movies-content.component.html',
  styleUrl: './movies-content.component.scss'
})
export class MoviesContentComponent {



  }



