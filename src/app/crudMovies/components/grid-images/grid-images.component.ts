import { Component } from '@angular/core';
import { MovieModule } from './movie/movie.module';
import { MoviesListeService } from './movies-liste.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-grid-images',
  standalone: true,
  imports: [HttpClientModule, FormsModule,RouterModule],
  templateUrl: './grid-images.component.html',
  styleUrl: './grid-images.component.scss',
})
export class GridImagesComponent {
  constructor(
    private movieService: MoviesListeService,
    private router: Router
  ) {}
  filteredMovies: MovieModule[] = [];
  movies: MovieModule[] = [];
  searchType: string = '';
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.Search;
      this.filteredMovies = this.movies;
      console.log(this.movies);
    });
  }
  filterMovies() {
    if (this.searchType.trim() === '') {
      this.filteredMovies = this.movies; // If searchType is empty, show all movies
    } else {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.Year.toLowerCase().includes(this.searchType.toLowerCase())
      );
    }
  }

  sendIdMovie(movieId: any) {
    console.log('id movie ', movieId);
    this.router.navigate(['/movie', movieId]);
  }
}
