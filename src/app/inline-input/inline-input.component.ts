import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'inline-input',
  templateUrl: './inline-input.component.html',
  styleUrls: ['./inline-input.component.css']
})

export class InlineInputComponent implements OnInit {

@Input() type:string;
@Input() placeholder:string;
@Input() value:string;
@Input() editMode:boolean;
@Input() isDisabled:boolean;
@Input() isRequired:boolean;

  emailFormControl = new FormControl('', [
    Validators.pattern(EMAIL_REGEX)
  ]);

  selectOptions = [
    {value: 'jazz', viewValue: 'Jazz'},
    {value: 'reggae', viewValue: 'Reggae'},
    {value: 'country', viewValue: 'Country'}
  ];

  autocompleteOptions = [
    {value: 'arkansas', viewValue: 'Arkansas'},
    {value: 'california', viewValue: 'California'},
    {value: 'florida', viewValue: 'Florida'},
    {value: 'Texas', viewValue: 'Texas'}
  ];



stateCtrl: FormControl;
filteredStates: Observable<any[]>;


  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.autocompleteOptions.slice());
  }

  filterStates(name: string) {
    return this.autocompleteOptions.filter(state =>
      state.viewValue.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }



  ngOnInit() {

  }



}
