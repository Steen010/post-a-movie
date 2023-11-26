import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IMovie } from '@avans-indiv-p2/shared/api';
import { Injectable } from '@angular/core';
import { environment } from '@avans-indiv-p2/shared/util-env';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
  observe: 'body',
  responseType: 'json',
};

/**
 *
 *
 */
@Injectable()
export class MovieService {
  endpoint = environment.dataApiUrl + '/movie';

  constructor(private readonly http: HttpClient) {}

  /**
   * Get all items.
   *
   * @options options - optional URL queryparam options
   */
  public list(options?: any): Observable<IMovie[] | null> {
    console.log(`list ${this.endpoint}`);

    return this.http
      .get<ApiResponse<IMovie[]>>(this.endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        map((response: any) => response.results as IMovie[]),
        tap(console.log),
        catchError(this.handleError)
      );
  }

  /**
   * Get a single item from the service.
   *
   */
  public read(id: string | null, options?: any): Observable<IMovie> {
    const endpoint = this.endpoint + `/${id}`;
    console.log(`read ${endpoint}`);
    return this.http
      .get<ApiResponse<IMovie>>(endpoint, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IMovie),
        catchError(this.handleError)
      );
  }

  public create(options?: any): Observable<IMovie> {
    const url = `${this.endpoint}`;
    console.log(`create ${url}`);
    return this.http
      .post<ApiResponse<IMovie>>(url, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IMovie),
        catchError(this.handleError)
      );
  }

  public update(options?: any): Observable<IMovie> {
    const url = `${this.endpoint}`;
    console.log(`update ${url}`);
    return this.http
      .put<ApiResponse<IMovie>>(url, {
        ...options,
        ...httpOptions,
      })
      .pipe(
        tap(console.log),
        map((response: any) => response.results as IMovie),
        catchError(this.handleError)
      );
  }

  /**
   * Handle errors.
   */
  public handleError(error: HttpErrorResponse): Observable<any> {
    console.log('handleError in UserService', error);

    return throwError(() => new Error(error.message));
  }
}
