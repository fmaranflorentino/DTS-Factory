import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkeletonService {
  private isActive = false;
  private status$: Subject<any> = new Subject();

  constructor() { }

  getSkeletonStatus(): Observable<any> {
    return this.status$.asObservable();
  }

  sewtInitialState() {
    this.status$.next(this.isActive);
  }

  toggleSkeletonStatus() {
    this.isActive = !this.isActive;

    this.status$
      .next(this.isActive);
  }
}
