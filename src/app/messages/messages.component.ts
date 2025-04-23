import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

  
  public messageService: MessageService; // Angular only binds to public component properties. The messageService property must be public because you're going to bind to it in the template.

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

}
