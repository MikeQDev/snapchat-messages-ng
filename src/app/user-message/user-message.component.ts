import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() color: string = "black";
  @Input() username: string = "N/A";

  messageGroup: any[] = [];

  ngOnInit(): void {
    this.messageGroup = [
      { color: this.color, message: this.generateRandomMessage() },
      { color: this.color, message: this.generateRandomMessage() },
      { color: this.color, message: this.generateRandomMessage() }
    ];
  }

  private generateRandomMessage(): string {
    let message = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    for (let i = 0; i < Math.random() * 2; i++) {
      message += " " + message;
    }
    return message;
  }

}
