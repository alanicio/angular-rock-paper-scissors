import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
	public displayModal:boolean;
  constructor() {
  	this.displayModal=false;
  }

  ngOnInit(): void {
  }

  modalStatus=()=>{
  	if(this.displayModal){
  		return "block";
  	}
  	else{
  		return "none";
  	}
  }

  displayHandler=()=>{
  	this.displayModal=!this.displayModal;
  }

}
