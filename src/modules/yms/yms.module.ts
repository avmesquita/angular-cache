import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { YmsRoutingModule } from './yms-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridList } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridTile } from "@angular/material/grid-list";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    YmsRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatGridList,
    MatIconModule,
    MatGridTile,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,            
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(),withInterceptorsFromDi()),    
  ]  
})
export class YmsModule { }
