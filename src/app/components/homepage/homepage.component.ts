import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [
    './styles/header.css',
    './styles/benefits.css',
    './styles/highlights.css',
    './styles/slides.css'
  ]
})
export class HomepageComponent{

  highlights = [
    {
      image1: '../../../assets/images/homepage/salmon-mobile@2x.jpg',
      image2: '../../../assets/images/homepage/salmon-desktop-tablet@2x.jpg',
      title: 'Seared Salmon Fillet',
      description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.'
    },
    {
      image1: '../../../assets/images/homepage/beef-mobile@2x.jpg',
      image2: '../../../assets/images/homepage/beef-desktop-tablet@2x.jpg',
      title: 'Rosemary Filet Mignon',
      description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.'
    },
    {
      image1: '../../../assets/images/homepage/chocolate-mobile@2x.jpg',
      image2: '../../../assets/images/homepage/chocolate-desktop-tablet@2x.jpg',
      title: 'Summer Fruit Chocolate Mousse',
      description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.'
    },
  ]
}
