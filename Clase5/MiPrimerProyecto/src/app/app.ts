import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';  
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('MiPrimerProyecto');
}
