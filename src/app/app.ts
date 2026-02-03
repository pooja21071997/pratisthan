import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoToTop } from "./shared/go-to-top/go-to-top";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoToTop, Footer, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pratisthan');
}
