import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ItemsService } from '../../services/items.service';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-admin',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  items = inject(ItemsService)
  logs = inject(LogsService)

  removeLocalStorage() {
    this.items.resetStorage();
    this.logs.resetStorage();
    window.location.reload();
  }

  downloadLocalStorage() {
    const data = JSON.stringify(this.items.getItems());
    const blob = new Blob([data], {type: "text/plain"})
    return window.URL.createObjectURL(blob);
  }

  uploadLocalStorage(event: Event) {
    console.log(event);
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const data = e.target.result;
        const items = JSON.parse(data);
        this.items.setItems(items);
      };

      reader.readAsText(file);
    }
  }

}
