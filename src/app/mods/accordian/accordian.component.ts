import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {

  isExpanded = true;
  Count:number=0;
  @Input() Acco: any[] = [];


  onchange(i: number) {
    this.Count = i;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
