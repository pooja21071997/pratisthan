import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Institutes } from './pages/institutes/institutes';
import { Initiatives } from './pages/initiatives/initiatives';
import { FoundersMsg } from './pages/founders-msg/founders-msg';
import { Contactus } from './pages/contactus/contactus';
import { Management } from './pages/management/management';
import { Gallery } from './pages/gallery/gallery';
import { AlbumComponent } from './pages/album/album';

export const routes: Routes = [
    { path: '', component: Home },

  {path: 'about', component: About },
  {path: 'founder-message', component: FoundersMsg },
  { path: 'management', component: Management },
  { path: 'institutes', component: Institutes },
  { path: 'initiatives', component: Initiatives },
  { path: 'gallery', component: Gallery },
  { path: 'gallery/:slug', component: AlbumComponent },
  { path: 'contact', component: Contactus },
  { path: '**', redirectTo: '' }


];
