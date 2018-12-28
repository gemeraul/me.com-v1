import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Message {
  name: string,
  email: string,
  content: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Contact Form
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  contactFormGroup: FormGroup;
  fullName: string = '';
  email: string = '';
  description: string = '';
  message: Message;

  private messagesCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  constructor(private _formBuilder: FormBuilder, private afs: AngularFirestore, public snackBar: MatSnackBar) {
    this.messagesCollection = afs.collection<Message>('messages');
    this.messages = this.messagesCollection.valueChanges();
  }

  ngOnInit() {
    this.contactFormGroup = this._formBuilder.group({
      email: this.emailControl,
      fullName: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'I kinda need this...' :
      this.emailControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submitContactForm() {
    console.log('Sending email beep boop...');
    this.message = {
      name: this.contactFormGroup.get('fullName').value,
      email: this.contactFormGroup.get('email').value,
      content: this.contactFormGroup.get('description').value
    }
    this.saveMessage(this.message);
    // TODO: Probably better to add this in sendMessage() as a resolve path of promise? 
    this.openSnackBar();
  }

  saveMessage(message: Message) {
    this.messagesCollection.add(message);
  }

  openSnackBar() {
    this.snackBar.open('Thanks! Your message has been sent. I\'ll contact you soon.', 'Ok', {
      duration: 4000,
    });
  }

}
