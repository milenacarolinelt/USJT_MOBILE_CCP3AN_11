import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PaisPage } from '../pais/pais';
import { ContinentePage } from '../continente/continente';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PaisPage;
  tab3Root = ContinentePage;

  constructor() {

  }
}
