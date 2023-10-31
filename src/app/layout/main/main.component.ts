import { Component } from '@angular/core';
import { FooterComponent } from "@layout/footer/footer.component";
import { HeaderComponent } from "@layout/header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
