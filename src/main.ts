import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // importuj svoj appConfig
import 'zone.js';


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
