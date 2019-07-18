import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basePath = environment.api.domain;

  constructor(
    private http: HttpClient
  ) { }

  public get<T>(url: string, option?: object): Observable<T> {

    const request = this.http
      .get<T>(`${this.basePath}${url}`, option);

    return request;

  }

  public post<T>(url: string, body: object, options?: object): Observable<T> {

    const request = this.http
      .post<T>(`${this.basePath}${url}`, body, options);

    return request;

  }
}
