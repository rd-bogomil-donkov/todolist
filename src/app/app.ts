import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Input } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, MatIcon, FormsModule, MatButton, MatListModule, MatCardModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  @Input() value: string = '';
  readonly checked = model(false);

  items: string[] = []

  addItem(){
    if(!this.items.find(i=> i===this.value) && this.value.trim().length>0){
      this.items.push(this.value)
    }
  }
}
