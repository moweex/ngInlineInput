import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})


export class ProfileCardComponent implements OnInit {
  isEditMode: boolean = true;

selectOptions = [
    {value: 'jazz', viewValue: 'Jazz'},
    {value: 'reggae', viewValue: 'Reggae'},
    {value: 'country', viewValue: 'Country'}
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleEdit(){
    this.isEditMode = !this.isEditMode;
  }

  user = {
    name: "mohamed mounir",
    email: "mohamed@mounir.io",
    bio: "asdasdasd",
    music: "Jazz"
  };

  date;
  selectedTags: any[] = [];


  onTagAdded(event) {
    this.selectedTags.push(event);
  }

  dateInput(event) {
    this.date = event.value;
  }

saveUser(user){
  console.log(user);
}



}
