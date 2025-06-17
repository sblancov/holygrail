import { Injectable } from '@angular/core';

interface Log {
  id: number;
  timestamp: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class LogsService {

  nextId: number = 1;
  logs: Log[] = [];

  getLogs() {
    this.loadStorage();
    return this.logs;
  }

  insert(name: string) {
    this.logs.unshift({
      id: this.nextId++,
      timestamp: (new Date()).toISOString(),
      message: `Got ${name}`
    });
  }

  saveStorage() {
    localStorage.setItem("logs", JSON.stringify(this.logs));
  }

  loadStorage() {
    this.logs = JSON.parse(localStorage.getItem("logs")|| "[]");
    if (this.logs.length !== 0) {
      this.nextId = this.logs[0].id
    }
  }

  resetStorage() {
    localStorage.removeItem("logs")
  }
}
