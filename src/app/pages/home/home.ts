import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
values = [
    {
      title: 'Man-Making Education',
      text: 'Education is an effective medium of man-making and character building.'
    },
    {
      title: 'Continuous Learning',
      text: 'Accepting various changing technological teaching and learning methods. We should think of all possibilities, intensive reading, writing, training etc. Exchanging thoughts and continuous learning help a person to develop a personality.',
      subtle: true
    },
    {
      title: 'Responsibility and Accountability',
      text: 'Referring to personal, social, national and humanity, a person has to fulfil all his duties. One has to serve the institute for its development internally and externally.'
    },
    {
      title: 'Qualitative education',
      text: 'Continuous study of various subjects helps to achieve the best quality education and inclusion of values along with skills. Expansion of thought process by visiting various best educational institutions.',
      subtle: true
    },
     {
      title: 'Nationalism and Patriotism',
      text: 'Patriotism is augmented by offering mind, body and life in the service of the motherland.'
    },
    {
      title: 'Social Sensitivity',
      text: 'Providing qualitative education to all sections of society and providing activity based education to the deprived section is our duty.',
      subtle: true
    },
    {
      title: 'Striving for excellence',
text:'Insisting on quality and excellence in all subjects and implementation of activities according to that.'    },
    {
      title: 'Team Work',
      text: 'The task is to be completed respecting others values. Excellence is maintained taking into consideration the ideas of elders and by serving society.',
      subtle: true
    }
  ];
}
