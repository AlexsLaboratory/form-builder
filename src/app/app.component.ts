import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FooterComponent } from "@layout/footer/footer.component";
import { HeaderComponent } from "@layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'form-builder';
}
