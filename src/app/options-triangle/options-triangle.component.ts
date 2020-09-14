import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'options-triangle',
  templateUrl: './options-triangle.component.html',
  styleUrls: ['./options-triangle.component.css']
})
export class OptionsTriangleComponent implements OnInit {
	@Input() userSelectionHandler:Function;
	@Input() getHands:Function;
  constructor() { }

  ngOnInit(): void {
  }

}
