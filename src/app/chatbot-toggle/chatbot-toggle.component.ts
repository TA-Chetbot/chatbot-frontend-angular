import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chatbot-toggle',
  standalone: true,
  imports: [],
  templateUrl: './chatbot-toggle.component.html',
  styleUrl: './chatbot-toggle.component.css'
})
export class ChatbotToggleComponent {
  @Input() isChatboxOpen = false;
  @Output() toggleEvent = new EventEmitter<void>();

  toggleChatbox() {
    this.toggleEvent.emit();
  }
}
