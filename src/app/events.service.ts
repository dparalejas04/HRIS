import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  static sidebarEvents: EventEmitter<boolean> = new EventEmitter<boolean>();
}
