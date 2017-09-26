import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  isEditMode: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleEdit(){
    this.isEditMode = !this.isEditMode;
  }

}