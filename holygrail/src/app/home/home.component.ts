import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {ItemsService} from '../services/items.service';
import { LogsService } from '../services/logs.service';


@Component({
  selector: 'app-home',
  imports: [MatListModule, MatGridListModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = inject(ItemsService)
  logsService = inject(LogsService)

  foundItem(event: Event) {
    let tile = event.currentTarget as HTMLElement;
    if (event.currentTarget !== null) {
      let idNumber = Number(tile.id.split("-")[1]);
      this.items.toggleFoundItem(idNumber);
      if (this.items.isFound(idNumber)) {
        tile.style.background = "lightgreen"
      } else {
        tile.style.background = "lightsteelblue"
      }
      this.logsService.insert(tile.textContent || "");
      this.items.saveStorage(this.items.items);
      this.logsService.saveStorage();
    }
  }

  foundColor(item:any) {
    return item.found ? "lightgreen" : "lightsteelblue";
  }

}
