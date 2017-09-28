import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
@Input() editMode: boolean;
@Input() isDisabled: boolean;
@Input() isRequired: boolean;
@Input() options:any[];
@Input() tagCallback;
@Input() dateCallback;

modelValue;
@Input()
get model() {
  return this.modelValue;
}


@Output() modelChange = new EventEmitter();
set model(val) {
  this.modelValue = val;
  this.modelChange.emit(this.modelValue);
}

emailFormControl = new FormControl('', [
    Validators.pattern(EMAIL_REGEX)
]);



  constructor() {

  }

  ngOnInit() {
    this.modelChange.emit(this.model);
  }



}








