import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormsModule } from './dynamic-forms/dynamic-forms-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DynamicFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dynamic-form');
}
