import { Component, inject } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { LogsService } from '../services/logs.service';


@Component({
  selector: 'app-logs',
  imports: [MatListModule],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css'
})
export class LogsComponent {

  logsService = inject(LogsService)

  getLogs() {
    let logs = this.logsService.getLogs();
    return logs.sort((a, b) => b.id - a.id)
  }
}
