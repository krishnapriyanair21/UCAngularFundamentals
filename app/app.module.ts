import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";


import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '', redirectTo: 'passengers', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true}),
    //custom modules
    PassengerDashboardModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule{}