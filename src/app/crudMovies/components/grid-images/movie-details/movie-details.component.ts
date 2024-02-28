import { MovieModule } from './../movie/movie.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesListeService } from '../movies-liste.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  form!: FormGroup;
  movieId!: string;
  movie!: MovieModule;

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private movieService: MoviesListeService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movieService.getMovieById(this.movieId).subscribe(movie => {
        this.movie = movie;
        console.log("movie ",this.movie)
      });
    });
  }


  createForm(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      wikipediaLink: [null],
      releaseDate: [null],
      image: [null],
      show: [false],
      movie: [true],
      fileName: [null],
    });
  }

  resetForm(): void {
    this.form.reset({
      id: null,
      name: null,
      wikipediaLink: null,
      releaseDate: null,
      image: null,
      show: false,
      movie: true,
      fileName: null
    });
  }

  setFormValue(item: any): void {
    this.form.patchValue(item);
  }

  get name(): any {
    return this.form.get('name');
  }
}
