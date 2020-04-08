import { Action } from '@ngrx/store';

export enum ZipCodeActionTypes {
  AddZipCode = '[ZipCode] Add ZipCodes',
  RemoveZipCode = '[ZipCode] Remove ZipCodes',
}

export class AddZipCode implements Action {
  readonly type = ZipCodeActionTypes.AddZipCode;
  constructor(public zipCode: string) {}
}
export class RemoveZipCode implements Action {
  readonly type = ZipCodeActionTypes.RemoveZipCode;
  constructor(public zipCode: string) {}
}

export type ZipCodeActions = AddZipCode | RemoveZipCode;
