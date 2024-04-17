import { Component, OnInit } from '@angular/core'
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, SwiperOptions } from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination, Keyboard])

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    // navigation: true,
    pagination: { clickable: true },
    keyboard: { enabled: true },
    // centeredSlides: true
  }

  constructor() {}

  ngOnInit() {}
}
