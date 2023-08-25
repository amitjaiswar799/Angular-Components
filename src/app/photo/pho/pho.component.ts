import { Component,OnInit } from '@angular/core';
import { PhotoGenService } from '../photo-gen.service';

@Component({
  selector: 'app-pho',
  templateUrl: './pho.component.html',
  styleUrls: ['./pho.component.css']
})
export class PhoComponent {

  photos: any;


  constructor(private ps : PhotoGenService){}

    searchPhoto() {
      this.ps.getRandomImage().subscribe((response) => {
        console.log(response.urls.regular);
        this.photos = response.urls.regular;
      });
    }

}
