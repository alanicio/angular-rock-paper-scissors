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
  @Input() modifyScore:Function;
	public houseHand:string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  	let self=this;
  	let houseSelection=Math.floor(Math.random() * 3);
  	setTimeout(() => {
  		self.houseHand=Object.keys(self.hands())[houseSelection];

      setTimeout(() => {
        self.matchResul();
      },1000);

    },1500);
  }

  matchResul=()=>{
    let whoBeatsWho={
      paper:"rock",
      rock:"scissors",
      scissors:"paper",
    };

    if(this.userHand!=this.houseHand){
      if(whoBeatsWho[this.userHand]==this.houseHand){
        this.modifyScore(1);
        alert("you Win!");
      }
      else{
        this.modifyScore(-1);
        alert("you Lose!");
      }
    }
    else{
      this.modifyScore(0);
      alert("tie!");
    }
  }

}
