import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl =
    'https://m2vq9le9cg.execute-api.us-west-1.amazonaws.com/restapi-portfolio/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: {
    fromAddress: string;
    subject: string;
    message: string;
  }) {
    return this.http.post(this.apiUrl, emailData);
  }
}
