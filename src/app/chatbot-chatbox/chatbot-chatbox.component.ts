// chatbot.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-chatbox.component.html',
  styleUrls: ['./chatbot-chatbox.component.css']
})
export class ChatbotChatboxComponent implements OnInit {
  @Input() isChatboxOpen = false;
  @Output() isChatboxOpenChange = new EventEmitter<boolean>();

  prompt = '';
  isTyping = false;
  chatLog: { role: string; content: string }[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async getAnswer(question: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isTyping = true;
    this.chatLog.push({ role: 'user', content: question });
    const response = await this.http.post(
      `${environment.apiUrl}/get_answer`,
      { question },
      { headers: { 'Content-Type': 'application/json' } }
    ).toPromise();
    const data = response as { answer: string };
    this.chatLog.push({ role: 'assistant', content: data.answer });
    this.isTyping = false;
    console.log(data);
  }

  closeChatbox() {
    this.isChatboxOpenChange.emit(false);
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getAnswer(this.prompt, event);
      this.prompt = '';
    }
  }

  clearChatLog() {
    this.chatLog = [];
  }
}