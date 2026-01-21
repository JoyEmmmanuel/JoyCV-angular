import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,       // THIS IS REQUIRED
  imports: [NavbarComponent, Footer, CommonModule, RouterModule],
  templateUrl: './skills.html',
  styleUrls: []
})
export class Skills {}
