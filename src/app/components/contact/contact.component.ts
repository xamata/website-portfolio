import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submitForm(): void {
    // Create an object to hold the form data
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    // Send the data to your server using HttpClient
    // Replace 'your-server-endpoint' with the actual endpoint on your server
    this.http.post('your-server-endpoint', formData).subscribe(
      (response) => {
        // Handle the server response
        console.log('Success:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
