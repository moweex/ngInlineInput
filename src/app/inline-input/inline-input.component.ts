import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { DateAdapter, NativeDateAdapter } from '@angular/material';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'inline-input',
  templateUrl: './inline-input.component.html',
  styleUrls: ['./inline-input.component.css']
})

export class InlineInputComponent implements OnInit {

@Input() type: string;
@Input() placeholder: string;
@Input() value: string;
@Input() editMode: boolean;
@Input() isDisabled: boolean;
@Input() isRequired: boolean;

emailFormControl = new FormControl('', [
    Validators.pattern(EMAIL_REGEX)
]);
  date;
  selectedTags: any[] = [];
  selectOptions = [
    {value: 'jazz', viewValue: 'Jazz'},
    {value: 'reggae', viewValue: 'Reggae'},
    {value: 'country', viewValue: 'Country'}
  ];

  onTagAdded(event) {
    this.selectedTags.push(event);
  }

  dateInput(event) {
    this.date = event.value;
  }





  constructor() {

  }

  ngOnInit() {

  }

}








