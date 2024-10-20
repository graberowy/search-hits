import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FloatLabelModule} from 'primeng/floatlabel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {RippleModule} from 'primeng/ripple';
import {provideAnimations} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextareaModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    CardModule,
    FormsModule,
  ],
  providers: [provideHttpClient(), MessageService, provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
