import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {AddZipCode} from '../actions/zip-code.actions';

@Component({
  selector: 'app-add-zip-code',
  templateUrl: './add-zip-code.component.html',
  styleUrls: ['./add-zip-code.component.scss']
})
export class AddZipCodeComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }
  addZipCode(zipCode: string){
    this.store.dispatch(new AddZipCode(zipCode));
  }

}
