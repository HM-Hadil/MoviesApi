import { Component, ElementRef,EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieModule } from '../grid-images/movie/movie.module';
import { MoviesListeService } from '../grid-images/movies-liste.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  constructor(private movieService: MoviesListeService) { }

  filteredMovies: MovieModule[] = [];
  movies: MovieModule[] = [];

  searchType: string = '';
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.Search;
      this.filteredMovies = this.movies; // Initialize filteredMovies with all movies

    });
  }
  filterMovies() {
    if (this.searchType.trim() === '') {
      this.filteredMovies = this.movies; // If searchType is empty, show all movies
    } else {
      this.filteredMovies = this.movies.filter(movie => movie.Type.toLowerCase().includes(this.searchType.toLowerCase()));
    }
  }
}


