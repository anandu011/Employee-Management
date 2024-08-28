// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClickTrackingService {
//   private storageKey = 'clickCounts';

//   constructor() {
//     this.initializeClickCounts();
//   }

//   private getClickCounts(): { [key: string]: number } {
//     const clickCounts = localStorage.getItem(this.storageKey);
//     return clickCounts ? JSON.parse(clickCounts) : {};
//   }

//   private saveClickCounts(clickCounts: { [key: string]: number }) {
//     localStorage.setItem(this.storageKey, JSON.stringify(clickCounts));
//   }

//   trackClick(action: string) {
//     const clickCounts = this.getClickCounts();
//     if (!clickCounts[action]) {
//       clickCounts[action] = 0;
//     }
//     clickCounts[action]++;
//     this.saveClickCounts(clickCounts);
//   }

//   getClickCount(action: string): number {
//     const clickCounts = this.getClickCounts();
//     return clickCounts[action] || 0;
//   }

//   private initializeClickCounts() {
//     if (!localStorage.getItem(this.storageKey)) {
//       this.saveClickCounts({});
//     }
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickTrackingService {

  // Method to track the click along with date and time
  trackClick(action: string): void {
    const currentData = this.getClickData(action);
    const newClick = {
      timestamp: new Date().toISOString(),  // Store the current date and time
      count: currentData.length + 1  // Increment count
    };
    const updatedData = [...currentData, newClick];
    localStorage.setItem(action, JSON.stringify(updatedData));
  }

  // Method to retrieve click data with date and time
  getClickData(action: string): { timestamp: string, count: number }[] {
    const data = localStorage.getItem(action);
    return data ? JSON.parse(data) : [];
  }

  // Method to get the total click count
  getClickCount(action: string): number {
    const data = this.getClickData(action);
    return data.length;
  }
}
