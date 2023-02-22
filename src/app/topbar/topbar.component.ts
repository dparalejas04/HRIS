import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  public isCollapsed: boolean;
  visible: boolean = false;
  hoverImage: boolean;

  constructor(private router: Router) {
    this.isCollapsed = true;
    this.hoverImage = false;
  }

  toggleSidebar(): void {
    let toggle = this.isCollapsed ? false : true;

    this.isCollapsed = toggle;

    EventsService.sidebarEvents.emit(toggle);
  }

  ngOnInit(): void {}

  change(value: boolean): void {
    console.log(value);
  }

  signOut(): void {
    this.router.navigateByUrl('/login');
  }
}
