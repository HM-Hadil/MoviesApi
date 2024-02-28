import { MoviesContentComponent } from './crudMovies/movies-content/movies-content.component';
import { Routes } from '@angular/router';
import { SearchBarComponent } from './crudMovies/components/search-bar/search-bar.component';
import { MainCrudContentComponent } from './crudMovies/main-crud-content/main-crud-content.component';
import { GridImagesComponent } from './crudMovies/components/grid-images/grid-images.component';
import { MovieDetailsComponent } from './crudMovies/components/grid-images/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: "",
    component: MainCrudContentComponent,
    children: [

          { path: "", component: GridImagesComponent },
          { path: "movie/:id", component: MovieDetailsComponent }
        ]
      }
    ];

