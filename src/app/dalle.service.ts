import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DalleService {
  constructor(private http: HttpClient) { }
  apiKey = process.env["OPENAI_API_KEY"];
  generateImages(prompt: string, n: number, size: string): Observable<Object> {
    const url = 'https://api.openai.com/v1/images/generations';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };
    const data = {
      prompt,
      n,
      size,
    };
    return this.http.post(url, data, { headers });
  }
}
