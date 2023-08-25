import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  enteredSearchValue : string ='';

  @Output()
  searchTextChange :EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(sterm: string){
    this.enteredSearchValue = sterm;
  }

  onSubmit(event:any){
     event.preventDefault();
     this.searchTextChange.emit(this.enteredSearchValue);
  }
 
}
