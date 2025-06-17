import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TogglesidebarService } from './services/togglesidebar.service';
import { ItemsService } from './services/items.service';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, RouterLink, MatSidenavModule, MatIconModule, MatButtonModule, ToolbarComponent, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'holygrail';
  toggleSidebar = inject(TogglesidebarService)
  items = inject(ItemsService)

  constructor(){
    this.items.loadStorage()
  }
}
