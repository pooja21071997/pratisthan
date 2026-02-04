import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {

  @ViewChild('navbar') navbar!: ElementRef;
  private bsCollapse!: Collapse;

  menu = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: "Founder's Message", link: '/founder-message' },
    { label: 'Management', link: '/management' },
    { label: 'Institutes', link: '/institutes' },
    { label: 'Initiatives', link: '/initiatives' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact Us', link: '/contact' },
  ];

  ngAfterViewInit() {
    this.bsCollapse = new Collapse(this.navbar.nativeElement, {
      toggle: false,
    });
  }

  closeNavbar() {
    if (this.navbar.nativeElement.classList.contains('show')) {
      this.bsCollapse.hide();
    }
  }
}
