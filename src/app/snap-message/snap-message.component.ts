import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snap-message',
  templateUrl: './snap-message.component.html',
  styleUrls: ['./snap-message.component.css']
})
export class SnapMessageComponent implements OnInit {
  saved: boolean = Math.round(Math.random()) ? true : false;
  @Input() color: string = "black";
  @Input() message: string = "N/A";

  toggleSave() {
    this.saved = !this.saved;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
