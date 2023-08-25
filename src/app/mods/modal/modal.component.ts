import { Component ,Input,Output,EventEmitter,ElementRef,OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modd: any[] = [];
  @Output() isOpenModal = new EventEmitter();

  constructor(private el : ElementRef){}

  ngOnInit(): void {
   document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(){
    this.el.nativeElement.remove();
  }

  onCloseClick() :void{
    this.isOpenModal.emit();
  }

}
