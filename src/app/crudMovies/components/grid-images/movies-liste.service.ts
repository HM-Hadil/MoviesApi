import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MovieModule } from './movie/movie.module';

@Injectable({
  providedIn: 'root'
})
export class MoviesListeService {

  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const apiKey = '9feec909';

    return this.http.get(`${this.apiUrl}?s=star+wars&apikey=${apiKey}`);
  }
  getMovieById(movieId: string): Observable<MovieModule> {
    const url = `${this.apiUrl}/${movieId}`;
    return this.http.get<MovieModule>(url);
  }

}
