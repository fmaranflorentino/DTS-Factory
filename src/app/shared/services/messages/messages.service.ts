import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private api$: ApiService
  ) { }

  getAllMessages(): Observable<any> {
    const url = 'api/users';

    return this.api$
      .get<any>(url)
      .pipe(
        map(resp => resp.payload)
      );
  }

  addNewMessage(msg): Observable<any> {
    const url = 'api/users';

    return this.api$.post(url, msg);
  }
}
