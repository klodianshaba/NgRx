import { Action } from '@ngrx/store';
import {ZipCodeActions , ZipCodeActionTypes} from '../actions/zip-code.actions';



export const zipCodeFeatureKey = 'zipCode';

export interface ZipCodeState {
  zipCodes: Array<string>;
}

export const initialState: ZipCodeState = {
  zipCodes: []
};

export function ZipCodeReducer(state = initialState, action: ZipCodeActions): ZipCodeState {
  switch (action.type) {
    case ZipCodeActionTypes.AddZipCode:
      return{...state , zipCodes: [...state.zipCodes, action.zipCode]};

    case ZipCodeActionTypes.RemoveZipCode:
      return {...state , zipCodes: state.zipCodes.filter(item => item !== action.zipCode) };

    default:
      return state;
  }
}
