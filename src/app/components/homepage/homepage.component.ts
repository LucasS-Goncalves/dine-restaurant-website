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

  @ViewChild('slideImgDiv') slideImgDiv!: ElementRef<HTMLDivElement>;
  @ViewChild('mobileImg') mobileImg!: ElementRef<HTMLImageElement>;
  @ViewChild('tabletImg') tabletImg!: ElementRef<HTMLImageElement>;
  @ViewChild('desktopImg') desktopImg!: ElementRef<HTMLImageElement>;
  @ViewChild('slideTitle') slideTitle!: ElementRef<HTMLTitleElement>;
  @ViewChild('slideDescription') slideDescription!: ElementRef<HTMLParagraphElement>;

  @ViewChild('slideOptions') slideOptions!: ElementRef<HTMLUListElement>;

  lastSlideNameSelected = 'family';

  private toggleCssClasses(){
    this.slideImgDiv.nativeElement.classList.add('fade_from_left');
    this.slideTitle.nativeElement.classList.add('fade_from_right');
    this.slideDescription.nativeElement.classList.add('fade_from_right');
    const timemout = setTimeout(() => {
      this.slideImgDiv.nativeElement.classList.remove('fade_from_left');
      this.slideTitle.nativeElement.classList.remove('fade_from_right');
      this.slideDescription.nativeElement.classList.remove('fade_from_right');
    }
    , 500);
  }

  changeSlide(slideOption: string, event: Event){

    const li = event.target as HTMLElement;
    let activatedLi = this.slideOptions.nativeElement.querySelector('.activate');

    if(slideOption === 'family') {

      if(this.lastSlideNameSelected !== 'family'){

          this.toggleCssClasses();

          this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-mobile@2x.jpg";
          this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-tablet@2x.jpg";
          this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/family-gathering-desktop@2x.jpg";
          this.slideTitle.nativeElement.textContent = "Family Gathering";
          this.slideDescription.nativeElement.textContent = "We love catering for entire families. So please bring  everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."

          this.lastSlideNameSelected = 'family';
      }
      activatedLi!.classList.remove('activate');
      li.classList.add('activate');
    }

    if(slideOption === 'special') {

      if(this.lastSlideNameSelected !== 'special'){

        this.toggleCssClasses();

        this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-mobile@2x.jpg";
        this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-tablet@2x.jpg";
        this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/special-events-desktop@2x.jpg";
        this.slideTitle.nativeElement.textContent = "Special Events";
        this.slideDescription.nativeElement.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";

        this.lastSlideNameSelected = 'special';
      }
      activatedLi!.classList.remove('activate')
      li.classList.add('activate');
    }

    if(slideOption === 'social') {

      if(this.lastSlideNameSelected !== 'social'){

        this.toggleCssClasses();

        this.mobileImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-mobile@2x.jpg";
        this.tabletImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-tablet@2x.jpg";
        this.desktopImg.nativeElement.srcset = "../../../assets/images/homepage/social-events-desktop@2x.jpg";
        this.slideTitle.nativeElement.textContent = "Social Events";
        this.slideDescription.nativeElement.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";

        this.lastSlideNameSelected = 'social';
      }
      activatedLi!.classList.remove('activate')
      li.classList.add('activate');
    }
  }
}
