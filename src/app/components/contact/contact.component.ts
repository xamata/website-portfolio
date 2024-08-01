import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../email.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  emailData = { toAddress: '', subject: '', message: '' };

  constructor(private emailService: EmailService) {}

  sendEmail() {
    // this.emailService.sendEmail(this.emailData).subscribe(
    //   (response) => {
    //     alert('Your form has been submitted!');
    //     console.log('Email sent successfully:', response);
    //   },
    //   (error) => {
    //     console.error('Error sending email:', error);
    //   }
    // );
    this.emailData.toAddress = '';
    this.emailData.subject = '';
    this.emailData.message = '';
  }
}
