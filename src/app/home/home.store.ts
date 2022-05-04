import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, of, pipe, switchMap, tap } from 'rxjs';
import { Person } from '../model/person';
import { ExampleApiService } from '../services/example-api.service';

interface HomeState {
  person: Person[];
  userError: string;
  isLoading: boolean;
}

const INIT_STATE: HomeState = {
  person: [],
  userError: null,
  isLoading: false,
};

@Injectable()
export class HomeStore extends ComponentStore<HomeState> {
  readonly user$ = this.select((state) => state.person);
  readonly loading$ = this.select((state) => state.isLoading);

  loadUser = this.effect<void>(
    pipe(
      switchMap(() =>
        this._exampleApiService.getData().pipe(
          tap({
            next: (person) => this.patchState({ person }),
            error: (userError) => this.patchState({ userError }),
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private _exampleApiService: ExampleApiService) {
    super(INIT_STATE);
  }
}
