import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageSlideshowComponent } from './home/image-slideshow/image-slideshow.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NavbarComponent } from './navbar/navbar.component';
import { StoryComponent } from './home/story/story.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AgmCoreModule } from '@agm/core';
import { MaplocationComponent } from './maplocation/maplocation.component';
import { googlemapsAPI } from '../googlemaps.api';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageSlideshowComponent,
    NavbarComponent,
    StoryComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    MaplocationComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    AgmCoreModule.forRoot({
      apiKey: googlemapsAPI
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
