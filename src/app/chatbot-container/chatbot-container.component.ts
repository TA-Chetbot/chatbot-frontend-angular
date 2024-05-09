import { Component } from '@angular/core';
import { ChatbotToggleComponent } from '../chatbot-toggle/chatbot-toggle.component';
import { ChatbotChatboxComponent } from '../chatbot-chatbox/chatbot-chatbox.component';

@Component({
  selector: 'app-chatbot-container',
  standalone: true,
  imports: [ChatbotToggleComponent, ChatbotChatboxComponent],
  templateUrl: './chatbot-container.component.html',
  styleUrl: './chatbot-container.component.css'
})
export class ChatbotContainerComponent {
  isChatboxOpen = false;

  toggleChatbox() {
    this.isChatboxOpen = !this.isChatboxOpen;
  }

  closeChatbox() {
    this.isChatboxOpen = false;
  }
}
