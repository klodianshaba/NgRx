import * as ZipCodeActions from './zip-code.actions';

describe('ZipCode', () => {
  it('should create an instance', () => {
    expect(new ZipCodeActions.LoadZipCodes()).toBeTruthy();
  });
});
