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
      link: 'https://acharyavp-site-guei.vercel.app/',
      description:
        'Building Foundations with Semi English Pre-Primary And Primary Education',
    },
    {
      name: 'Primary And Secondary School',
      image: 'assets/images/Institutes/primarySecondary.png',
      link: 'https://primary-secondary-site.vercel.app/',
      description: 'Innovative Learning for Young Minds\nKG to Class 10',
    },
    {
      name: 'English Medium School',
      image: 'assets/images/Institutes/English.png',
      link: 'https://english-medium-site.vercel.app/',
      description: 'Empowering Minds Through Quality English Education\nKG to Class 10',
    },
    {
      name: 'Kashinath Palod Public School',
      image: 'assets/images/Institutes/kpps.png',
      link: 'https://kpps-site.vercel.app/',
      description: 'Imparting Excellence in CBSE Learning\nNursery to Class 10',
    },
    {
      name: 'Late Smt. B.G. Shanbhag Highschool',
      image: 'assets/images/Institutes/shanbhag.png',
      link: 'https://bgs-site-smoky.vercel.app/',
      description: 'Imparting Excellence in CBSE Learning\nNursery to Class 10',
    },
    {
      name: 'Shravan Vikas Mandir',
      image: 'assets/images/Institutes/Shravan.png',
      link: 'https://svm-site.vercel.app/',
      description: 'Empowering Diverse Learners through Specialized Education',
    },
    {
      name: 'Junior & Senior College',
      image: 'assets/images/Institutes/Clg.png',
      link: 'https://jrclg-site.vercel.app/',
      description:
        'Fostering Enlightenment Through Advanced Educational Pursuits',
      center: true,
    },
  ];
}
