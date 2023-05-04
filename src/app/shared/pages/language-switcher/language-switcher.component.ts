import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent {
  selectedLanguage?: string;
  languages: string[] = [];

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.selectedLanguage = this.appComponent.getCurrentLanguage();
    this.languages = this.appComponent.getAllLanguages();
  }

  onLanguageSelected(language: string) {
    this.appComponent.switchLanguage(language)
  }
}
