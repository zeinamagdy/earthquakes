import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EarthQuakeComponent } from './earth-quake/earth-quake.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { EarthQuakeDetailsComponent } from './earth-quake-details/earth-quake-details.component';
import { DataService } from './services/dataService';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EarthQuakeComponent,
    HeaderComponent,
    EarthQuakeDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQOCr8ozhe_Vxha_SwMVFL_EKS8TPzBqo'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
