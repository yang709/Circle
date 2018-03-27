import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import { Message } from '../../_models/index';
import { ChatService } from '../../_services/chat.service';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-message-content',
  templateUrl: './message-content.component.html',
  styleUrls: ['./message-content.component.css']
})
export class MessageContentComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  chats : any;
  joinned: boolean = false;
  thisroom: string;
  msgData: Message;
//  msgData = { room: '', nickname: '', message: '' };
  socket = io('http://localhost:4000');

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.msgData = new Message();

    var user = JSON.parse(localStorage.getItem("currentUser"));
    this.thisroom = user.roomId;
    if(user!==null) {
      this.joinRoom();
      this.scrollToBottom();
    }
    this.socket.on('new-message', function (data) {
      if(data.roomId === JSON.parse(localStorage.getItem("currentUser")).roomId) {
        console.log(typeof(this.chats));
        this.chats.push(data);
        this.msgData.roomId = user.roomId;
        this.msgData.nickname = user.email;
        this.msgData.message  = '';
  //      this.msgData = { room: user.roomId, nickname: user.email, message: '' }
        this.scrollToBottom();
      }
    }.bind(this));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).then((res) => {
      console.log("res");
      console.log(typeof(res));
      this.chats = res;

    }, (err) => {
      console.log(err);
    });
  }

  joinRoom() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("currentUser"));
//    console.log("userId");
 //   console.log(user.roomId);
 //   console.log(this.thisroom);
    this.getChatByRoom(this.thisroom);
    this.msgData.roomId = user.roomId;
    this.msgData.nickname = user.email;
    this.msgData.message  = 'joined';
    this.msgData.updated_at = date;
  //  this.msgData = { room: user.roomId, nickname: user.email, message: '' };
    this.joinned = true;
    this.socket.emit('save-message', this.msgData);
  }

  sendMessage() {
    this.chatService.saveChat(this.msgData).then((result) => {
      this.socket.emit('save-message', this.msgData);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("currentUser"));
    this.msgData.roomId = user.roomId;
    this.msgData.nickname = user.email;
    this.msgData.message  = 'left';
    this.msgData.updated_at = date;
    this.socket.emit('save-message', this.msgData);
    this.joinned = false;
  }

}
