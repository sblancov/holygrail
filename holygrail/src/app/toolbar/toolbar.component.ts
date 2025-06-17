import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { TogglesidebarService } from '../services/togglesidebar.service';


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  opened = inject(TogglesidebarService)

  toggle() {
    this.opened.toggle();
  }
}
