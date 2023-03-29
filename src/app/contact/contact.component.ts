import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    this.disableInputFields();

    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('mail', this.mailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);

    await fetch('https://hans-stieber.com/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    this.enableInputFields();
    this.clearInputFields();
  }


  disableInputFields() {
    this.nameField.nativeElement.disabled = true;
    this.mailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.disabled = true;
  }


  enableInputFields() {
    this.nameField.nativeElement.disabled = false;
    this.mailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }


  clearInputFields() {
    this.nameField.nativeElement.value = '';
    this.mailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
    this.sendButton.nativeElement.value = '';
  }
  

  @ViewChild('arrowUp') arrowUp!: ElementRef;

  changeImgSrc(newSrc: string) {
    this.arrowUp.nativeElement.src = newSrc;
  }

  scrollToStart() {
    document.getElementById('start-screen')!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
