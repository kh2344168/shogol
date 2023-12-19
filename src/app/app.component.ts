import { Component , ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'shogol';
  level1Checked = false;
  level2Checked = false;
  level3Checked = false;
    // Add more categories as needed

}
