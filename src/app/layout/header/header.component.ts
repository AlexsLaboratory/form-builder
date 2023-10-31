import { Component } from '@angular/core';
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    MatMenuModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
