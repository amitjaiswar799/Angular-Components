import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoGenService {

  constructor(private http : HttpClient) { }

  getRandomImage() {
    return this.http.get<unsplashdata>('https://api.unsplash.com/photos/random', {
      headers: { 
        Authorization: 'Client-ID 7e2vkDMhgrOMl-DUfIQMZwACX7WjWL8jRr97xw_Qmz4' 
      }
    });
  }
}

interface unsplashdata{
  urls :{
    regular : string;
  }
}
