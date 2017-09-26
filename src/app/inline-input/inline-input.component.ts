import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
