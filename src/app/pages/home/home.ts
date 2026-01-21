import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';  // Needed for ngIf, ngFor etc.
import { RouterModule } from '@angular/router';  // Needed for routerLink
@Component({
  selector: 'app-home',
  standalone: true,          // Must be standalone since you are using imports here
 imports: [NavbarComponent, Footer, CommonModule, RouterModule],
  templateUrl: './home.html',
 styleUrls: []
})
export class Home {

}
