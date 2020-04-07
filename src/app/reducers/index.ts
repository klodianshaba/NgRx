import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {ZipCodeReducer, ZipCodeState} from './zip-code.reducer';

export interface State {
  zipCodes: ZipCodeState;
}

export const reducers: ActionReducerMap<State> = {
  zipCodes: ZipCodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
