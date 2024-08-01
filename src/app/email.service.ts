import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  sendEmail(emailData: {
    toAddress: string;
    subject: string;
    message: string;
  }) {
    return this.http.post(this.apiUrl, emailData);
  }
}
