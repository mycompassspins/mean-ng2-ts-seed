/**
 * Created by Justin on 9/10/16.
 */

import { NgModule, enableProdMode } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common'
import { AppComponent } from './components/app/AppComponent'
import { COMPONENTS } from './components'
import { SERVICES } from './services'
import { ROUTES } from './config/Routes'
import { ENV } from './config/Environment'

if (ENV === 'production') enableProdMode();

@NgModule({
	declarations: [AppComponent, COMPONENTS],
	providers: SERVICES,
	imports: [CommonModule, BrowserModule, FormsModule, HttpModule, ROUTES],
	bootstrap: [AppComponent],
})
export class AppModule{}
