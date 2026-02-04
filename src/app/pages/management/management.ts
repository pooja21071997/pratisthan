import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './management.html',
  styleUrl: './management.css',
})
export class Management {
  members = [
    { name: 'Rajendra Lakhichand Nannaware', role: 'President' },
    { name: 'Hemlata Bharat Amalkar', role: 'Vice President' },
    { name: 'Vinod Subhash Patil', role: 'Secretary' },
    { name: 'Dilip Ananda Mahajan', role: 'Joint Secretary' },
    { name: 'Pallavi Rahul Mayur', role: 'Treasurer' },
    { name: 'Akshay Chhabildas Shah', role: 'Joint Treasurer' },
    { name: 'Mukund Gopalrao Shanbhag', role: 'Member' },
    { name: 'Miratai Mukund Shanbhag', role: 'Member' },
    { name: 'Gopal Kashinath Palod', role: 'Member' },
    { name: 'Kavita Vishvas Dixit', role: 'Member' },
    { name: 'Vaijayanti Ashok Padhye', role: 'Member' },
    { name: 'Mahendra Tryambak Shirude', role: 'Member' },
    { name: 'Yogesh Pralhad Chaudhari', role: 'Member' },
    { name: 'Kushal Dilip Gandhi', role: 'Member' },
    { name: 'Tushar Amar Kukreja', role: 'Member' },
  ];
}
