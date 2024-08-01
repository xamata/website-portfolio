import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'testingapi.com';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: {
    toAddress: string;
    subject: string;
    message: string;
  }) {
    return this.http.post(this.apiUrl, emailData);
  }
}
