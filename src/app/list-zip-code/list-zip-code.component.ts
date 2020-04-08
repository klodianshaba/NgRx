import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {RemoveZipCode} from '../actions/zip-code.actions';



@Component({
  selector: 'app-list-zip-code',
  templateUrl: './list-zip-code.component.html',
  styleUrls: ['./list-zip-code.component.scss']
})
export class ListZipCodeComponent implements OnInit {
  zipCodes: Array<string>;

  constructor(private store: Store<State>) {
    store.select(state => state.zipCodes).subscribe(zips => this.zipCodes = zips.zipCodes);
  }

  ngOnInit(): void {
  }

  deleteZipCode(zipCode: string): void{
    this.store.dispatch(new RemoveZipCode(zipCode));
  }

}
