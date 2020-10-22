import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {KeysPipe} from './pipes/keys.pipe';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, PageNotFoundComponent, KeysPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    KeysPipe
  ]
})
export class SharedModule {
}
