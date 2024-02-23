import { AfterContentInit, Component, NgZone } from '@angular/core';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  constructor(private ngZone: NgZone) {}

  ngAfterContentInit(): void {
    this.ngZone.runOutsideAngular(() => {
      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--getting-started',
        children: 'a',
        pswpModule: PhotoSwipe,
      });

      lightbox.init();
    });
  }
}
