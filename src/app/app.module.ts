import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageSlideshowComponent } from './image-slideshow/image-slideshow.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NavbarComponent } from './navbar/navbar.component';
import { StoryComponent } from './home/story/story.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AgmCoreModule } from '@agm/core';
import { MaplocationComponent } from './maplocation/maplocation.component';
import { googlemapsAPI } from '../googlemaps.api';
import { ClickOutsideModule } from 'ng-click-outside';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EventsComponent } from './events/events.component';
import { FbImagesComponent } from './fb-images/fb-images.component';
import { HomeSlidesContentComponent } from './home/home-slides-content/home-slides-content.component';
import { MenuSlidesContentComponent } from './menu/menu-slides-content/menu-slides-content.component';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactSlidesContentComponent } from './contact/contact-slides-content/contact-slides-content.component';
import {
  AngularFirestoreModule,
  AngularFirestore
} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

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
    MenuComponent,
    ReservationComponent,
    EventsComponent,
    FbImagesComponent,
    MenuSlidesContentComponent,
    HomeSlidesContentComponent,
    ContactSlidesContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SlideshowModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: googlemapsAPI
    })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
