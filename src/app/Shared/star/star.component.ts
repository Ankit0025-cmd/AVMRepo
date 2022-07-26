import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number = 4;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;

  ngOnChanges(): void{
    this.cropWidth = this.rating*(75/5);
  }
  onClick():void{
    console.log(`The rating ${this.rating} was clicked!!`);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!!`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
