import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css']
})
export class VersusComponent implements OnInit {
	@Input() color:string;
	@Input() hand:string;

  constructor() { }

  ngOnInit(): void {
  }

}
