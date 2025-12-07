import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppConfig } from './app/app.config';

platformBrowser().bootstrapModule(AppModule, AppConfig)
  .catch(err => console.error(err));
