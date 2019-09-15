import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-update',
  templateUrl: './tech-update.component.html',
  styleUrls: ['./tech-update.component.css']
})
export class TechUpdateComponent implements OnInit {

  constructor() { }
  cdnLink = '<script src="http://sivainfo.rf.gd/assets/profile/library/samplejs.js"></script>';
  ngOnInit() {
  this.sampleJs();
  }
	sampleJs() {
	  var elmnt = document.getElementById("samp");
	  elmnt.scrollIntoView();
	}
}
