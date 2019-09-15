import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }
  arr = [1,2,3,4,5,6]
  ngOnInit() {
  }

}
