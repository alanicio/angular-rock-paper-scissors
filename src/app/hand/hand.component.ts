import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
	@Input() color:string;
	@Input() logo:string;
  constructor() { }

  ngOnInit(): void {
  }

}
