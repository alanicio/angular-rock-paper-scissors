import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {
	@Input() color:string;
	@Input() userHand:string;
	@Input() hands:Function;
	public houseHand:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  	let self=this;
  	let houseSelection=Math.floor(Math.random() * 3);
  	setTimeout(() => {
  		self.houseHand=Object.keys(self.hands())[houseSelection];
    },1500);
  }

}
