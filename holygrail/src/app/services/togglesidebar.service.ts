import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglesidebarService {

  opened: boolean = true;

  toggle() {
    this.opened = !this.opened;
  }
}
