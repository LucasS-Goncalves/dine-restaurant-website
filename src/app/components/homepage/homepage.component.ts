import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [
    './styles/header.css',
    './styles/benefits.css',
    './styles/highlights.css',
    './styles/slides.css',
    './styles/reservation.css'
  ]
})
export class HomepageComponent{

  @ViewChild('slideImg') slideImg!: ElementRef<HTMLImageElement>;

  changeSlide(){
    this.slideImg.nativeElement.src = "../../../assets/images/homepage/special-events-desktop@2x.jpg"
    console.log('oi')
  }
}
