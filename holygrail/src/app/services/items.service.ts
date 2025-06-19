import { Injectable } from '@angular/core';
import rawData from '../../assets/items.json';


export interface Item {
  id: number;
  found: boolean;
  name: string;
  group: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  setGroups = Array.from({ length: 32 }, (_, i) => i + 10);
  uniqueGroups = [50];
  items = rawData as Item[];

  setItems(items: any) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  getTotalItems() {
    return this.items.length;
  }

  getFoundItems() {
    return this.items.filter(item => item.found);
  }

  getTotalFoundItems() {
    return this.getFoundItems().length;
  }

  getRunes() {
    return this.items.filter(item => item.group == 1);
  }

  getFoundRunes() {
    return this.getRunes().filter(item => item.found);
  }

  getTotalRunes() {
    return this.getRunes().length;
  }

  getTotalFoundRunes() {
    return this.getFoundRunes().length;
  }

  getRunewords() {
    let items = this.items.filter(item => item.group == 2).sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    return items;
  }

  getTotalRunewords() {
    return this.getRunewords().length;
  }

  getFoundRunewords() {
    return this.getRunewords().filter(item => item.found);
  }

  getTotalFoundRunewords() {
    return this.getFoundRunewords().length;
  }

  getSets() {
    return this.items.filter(item => this.setGroups.includes(item.group));
  }

  getFoundSets() {
    return this.getSets().filter(item => item.found);
  }

  getTotalFoundSets() {
    return this.getFoundSets().length;
  }

  getTotalSets() {
    return this.getSets().length;
  }

  getUniques() {
    return this.items.filter(item => this.uniqueGroups.includes(item.group));
  }

  getTotalUniques() {
    return this.getUniques().length;
  }

  getFoundUniques() {
    return this.getUniques().filter(item => item.found);
  }

  getTotalFoundUniques() {
    return this.getFoundUniques().length;
  }

  isFound(id: number) {
    let item = this.items.find(item => item.id == id);
    return item?.found;
  }

  toggleFoundItem(id: number) {
    let item = this.items.find(item => item.id == id);
    if (item != null) {
      item.found = !item.found
    }
  }

  loadStorage() {
    const stored_items = localStorage.getItem("items");
    if (stored_items == null) {
      localStorage.setItem("items", JSON.stringify(this.items));
    } else {
      this.updateItemsVersion(stored_items)
    }
  }

  updateItemsVersion(stored_items: string) {
    let parsed_stored_items: Item[] = JSON.parse(stored_items)
    const diff = this.items.length - stored_items.length;
    if (diff > 0) {
      for (let index = this.items.length; index < stored_items.length; index++) {
        parsed_stored_items.push(this.items[index])
      }
    }
    this.setItems(parsed_stored_items);
  }

  saveStorage(items: Array<Item>) {
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  resetStorage() {
    localStorage.removeItem("items")
  }
}
