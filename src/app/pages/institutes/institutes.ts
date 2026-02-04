import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-institutes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './institutes.html',
  styleUrl: './institutes.css',
})
export class Institutes {
  institutes = [
    {
      name: 'Dr Avinash Achaarya Vidyalaya',
      image: 'assets/images/Institutes/Acharya.jpg',
      link: 'http://localhost:55888/',
      description:
        'Building Foundations with Semi English Pre-Primary And Primary Education',
    },
    {
      name: 'Primary And Secondary School',
      image: 'assets/images/Institutes/primarySecondary.png',
      link: 'http://localhost:55385/',
      description: 'Innovative Learning for Young Minds\nKG to Class 10',
    },
    {
      name: 'English Medium School',
      image: 'assets/images/Institutes/English.png',
      link: 'http://localhost:55776/',
      description: 'Empowering Minds Through Quality English Education\nKG to Class 10',
    },
    {
      name: 'Kashinath Palod Public School',
      image: 'assets/images/Institutes/kpps.png',
      link: 'http://localhost:55489/',
      description: 'Imparting Excellence in CBSE Learning\nNursery to Class 10',
    },
    {
      name: 'Late Smt. B.G. Shanbhag Highschool',
      image: 'assets/images/Institutes/shanbhag.png',
      link: 'http://localhost:55563/',
      description: 'Imparting Excellence in CBSE Learning\nNursery to Class 10',
    },
    {
      name: 'Shravan Vikas Mandir',
      image: 'assets/images/Institutes/Shravan.png',
      link: 'http://localhost:55248/',
      description: 'Empowering Diverse Learners through Specialized Education',
    },
    {
      name: 'Junior & Senior College',
      image: 'assets/images/Institutes/Clg.png',
      link: 'http://localhost:55630/',
      description:
        'Fostering Enlightenment Through Advanced Educational Pursuits',
      center: true,
    },
  ];
}
