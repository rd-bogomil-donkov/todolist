import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { Input } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, MatIcon, FormsModule, MatButton, MatListModule, MatCardModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  @Input() value: string = '';

  items: Item[] = []
  checkedItems: Item[] = []
  visibleItems: Item[] = []

  onAddItem() {
    if (!this.items.find(i => i.name === this.value) && this.value.trim().length > 0) {
      this.items.push({ name: this.value, checked: false })
    }

    this.visibleItems = this.items

    this.value = '';
  }

  onInputChange(value: string) {
    this.visibleItems = this.items.filter(i => i.name.toLowerCase().includes(value.toLowerCase()));
  }

  onCheckboxChange() {
    this.checkedItems = this.items.filter(i => i.checked);
  }

  isAnyItemChecked() {
    return this.checkedItems.length > 0;
  }

  onDelete() {
    this.items = this.items.filter(i => !i.checked);
    this.visibleItems = this.items;
    this.checkedItems = [];
  }
}
