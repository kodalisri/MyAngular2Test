import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { HighLightDirective }  from './highlight.directive';
import { TitleComponent } from './title.component';
import  { UserService } from './user.service';
import { ContactModule } from './contact/contact.module';
import { MyReduxTest  }  from './reducexample/redux-example.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/contacts-reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,ContactModule,
    StoreModule.provideStore(reducer),
  ],
  declarations: [
    AppComponent, 
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HighLightDirective,
    TitleComponent,
    MyReduxTest
  ],
  providers: [ HeroService,UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
