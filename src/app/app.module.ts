import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ClinicalOfficeMpageModule} from "@clinicaloffice/clinical-office-mpage";
import {MaterialModule} from "@clinicaloffice/clinical-office-mpage";
import {ErrorHandlerService} from "@clinicaloffice/clinical-office-mpage";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ClinicalOfficeMpageModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatMomentDateModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {
      provide: MAT_DATE_FORMATS, useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'MM-DD-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
