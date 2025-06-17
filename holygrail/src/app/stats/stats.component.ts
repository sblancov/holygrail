import { Component, inject } from '@angular/core';
import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  items = inject(ItemsService)

  getTotalFoundItems() {
    return this.items.getTotalFoundItems()
  }

  getTotalFoundRunes() {
    return this.items.getTotalFoundRunes()
  }

  getTotalFoundRunewords() {
    return this.items.getTotalFoundRunewords()
  }

  getTotalFoundSets() {
    return this.items.getTotalFoundSets()
  }

  getTotalFoundUniques() {
    return this.items.getTotalFoundUniques()
  }

  getTotalItems() {
    return this.items.getTotalItems();
  }

  getTotalRunes() {
    return this.items.getTotalRunes()
  }

  getTotalRunewords() {
    return this.items.getTotalRunewords()
  }

  getTotalSetItems() {
    return this.items.getTotalSets()
  }

  getTotalUniques() {
    return this.items.getTotalUniques()
  }

  getTotalPercent() {
    return this.getPercent(this.getTotalFoundItems(), this.getTotalItems())
  }

  getTotalRunesPercent() {
    return this.getPercent(this.getTotalFoundRunes(), this.getTotalRunes())
  }

  getTotalRunewordsPercent() {
    return this.getPercent(this.getTotalFoundRunewords(), this.getTotalRunewords())
  }

  getTotalSetsPercent() {
    return this.getPercent(this.getTotalFoundSets(), this.getTotalSetItems())
  }

  getTotalUniquesPercent() {
    return this.getPercent(this.getTotalFoundUniques(), this.getTotalUniques())
  }

  getPercent(totalFound:number, total:number) {
    let quantity = 100 * (totalFound / total);
    let result = quantity.toFixed(2)
    return result;
  }
}
