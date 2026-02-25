import { Component } from '@angular/core';
import { ALBUMS, Album } from '../gallery-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule,Location } from '@angular/common';

@Component({
  selector: 'app-album',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class AlbumComponent {
  album?: Album;
  constructor(private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.album = ALBUMS.find((a) => a.slug === slug);
    }
  }
  trackByPhoto(index: number, photo: string) {
    return photo;
  }
  goBack(): void {
  this.location.back();
}
}
