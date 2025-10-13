import { Component } from '@angular/core';
import { PropertyService } from 'src/app/core/services/property.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { text: string, type: 'user' | 'bot' }[] = [];
  userInput = '';

  constructor(private propertyService: PropertyService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    const userMessage = this.userInput;
    this.messages.push({ text: userMessage, type: 'user' });
    this.userInput = '';

    this.propertyService.sendChatMessage(userMessage).subscribe({
      next: (res) => {
        this.messages.push({
          text: res.reply || '🤖 Sorry, I didn’t understand that.',
          type: 'bot'
        });
      },
      error: () => {
        this.messages.push({
          text: '⚠️ Server error. Please try again later.',
          type: 'bot'
        });
      }
    });
  }

  
  closeChat() {
    const event = new CustomEvent('closeChat');
    window.dispatchEvent(event);
  }
}
