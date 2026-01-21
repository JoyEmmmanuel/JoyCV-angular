import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';  // Needed for ngIf, ngFor etc.
import { RouterModule } from '@angular/router';  // Needed for routerLink
@Component({
  selector: 'app-home',
  standalone: true,          // Must be standalone since you are using imports here
 imports: [ CommonModule, RouterModule],
  templateUrl: './home.html',
 styleUrls: []
})
export class Home {

}
