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

  @ViewChild('mobileImg') mobileImg!: ElementRef<HTMLImageElement>;
  @ViewChild('tabletImg') tabletImg!: ElementRef<HTMLImageElement>;
  @ViewChild('desktopImg') desktopImg!: ElementRef<HTMLImageElement>;
  @ViewChild('slideTitle') slideTitle!: ElementRef<HTMLTitleElement>;
  @ViewChild('slideDescription') slideDescription!: ElementRef<HTMLParagraphElement>;

  @ViewChild('slideOptions') slideOptions!: ElementRef<HTMLUListElement>;

  changeSlide(slideOption: string, event: Event){

    if(slideOption === 'family') {
      const li = event.target as HTMLElement;
      let activatedLi = this.slideOptions.nativeElement.querySelector('.activate');

      this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-mobile@2x.jpg";
      this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-tablet@2x.jpg";
      this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-desktop@2x.jpg";

      this.slideTitle.nativeElement.textContent = "Family Gathering";
      this.slideDescription.nativeElement.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."

      activatedLi!.classList.remove('activate')
      li.classList.add('activate');
    }

    if(slideOption === 'special') {
      const li = event.target as HTMLElement;
      let activatedLi = this.slideOptions.nativeElement.querySelector('.activate');

      this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-mobile@2x.jpg";
      this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-tablet@2x.jpg";
      this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-desktop@2x.jpg";

      this.slideTitle.nativeElement.textContent = "Special Events";
      this.slideDescription.nativeElement.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";

      activatedLi!.classList.remove('activate')
      li.classList.add('activate');
    }

    if(slideOption === 'social') {
      const li = event.target as HTMLElement;
      let activatedLi = this.slideOptions.nativeElement.querySelector('.activate');

      this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-mobile@2x.jpg";
      this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-tablet@2x.jpg";
      this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-desktop@2x.jpg";

      this.slideTitle.nativeElement.textContent = "Social Events";
      this.slideDescription.nativeElement.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";

      activatedLi!.classList.remove('activate')
      li.classList.add('activate');
    }
  }
}
