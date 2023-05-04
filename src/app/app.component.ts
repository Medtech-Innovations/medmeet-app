import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medmeet-app';

  avaliableLanguages = ['en', 'es'];
  constructor(public translate: TranslateService){
    this.translate.addLangs(this.avaliableLanguages);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string){
    this.translate.use(language);
  }
  getAllLanguages(){ return this.avaliableLanguages; }
  getCurrentLanguage(){ return this.translate.currentLang; }
}
