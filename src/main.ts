import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "@app/app.component";
import { provideRouter, withDebugTracing } from "@angular/router";
import { APP_ROUTES } from "@app/app.route";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(APP_ROUTES, withDebugTracing())
  ],
}).catch(err => console.error(err));
