import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent {

  stats = [
    {value:99 , lable:'favourites'},
    {value:99 , lable:'views'},
    {value:99 , lable:'users'}
  ]

  stats1 = [
    {value:99 , lable:'favourites'},
    {value:99999 , lable:'views'},
    {value:999 , lable:'users'}
  ]

  Count =[
    {title:"Mountain" , imgUrl :'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',description:"May your mountains rise into and above the clouds."}
    ,{title:"beach" , imgUrl :'https://images.unsplash.com/photo-1688574398156-92556aa3cf52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',description:"The ocean's roar is music to the soul."}
    ,{title:"boat" , imgUrl :'https://plus.unsplash.com/premium_photo-1683750689796-285f1c699ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    description:"Life is like a boat in the sea. When the sea is rough the only way to keep your boat moving forward is to keep rowing"}
  
  ]
}
