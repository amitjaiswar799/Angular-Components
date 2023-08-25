import { Component } from '@angular/core';
import { WikiSearchService } from '../wiki-search.service';

@Component({
  selector: 'app-wiki-home',
  templateUrl: './wiki-home.component.html',
  styleUrls: ['./wiki-home.component.css']
})
export class WikiHomeComponent {
  searchTerm:any;
  pages:any[]=[];

  constructor(private ws:WikiSearchService){}

  swyw(event:string){
    console.log('Getting data by consuming API'+event)
    this.ws.search(event).subscribe((response: any)=>{
       console.log(response.query.search)
      this.pages = response.query.search;
    });
  }
}
