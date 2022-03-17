import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { usersInfoService } from './users.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LogInComponent,
    AddSubjectComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [usersInfoService],
  bootstrap: [AppComponent,
    LogInComponent,
    HomeComponent]
})
export class AppModule { }
