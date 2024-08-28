import { Directive, HostListener, Input } from '@angular/core';
import { ClickTrackingService } from '../services/click-tracking.service';

// @Directive({
//   selector: '[appClickTracking]'
// })
// export class ClickTrackingDirective {

//   @Input('appClickTracking') action?: string;

//   constructor(private clickTrackingService: ClickTrackingService) {}

//   @HostListener('click') onClick() {
//     if (this.action) {
//       this.clickTrackingService.trackClick(this.action);
//     }
//   }
// }
@Directive({
  selector: '[appClickTracking]'
})
export class ClickTrackingDirective {
  @Input('appClickTracking') action!: string;

  constructor(private clickTrackingService: ClickTrackingService) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.clickTrackingService.trackClick(this.action);
  }
}
