import { Component, VERSION } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('.3s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('.3s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  isShowList = false;
  buttonName = 'Show List';

  onBtnClick = () => {
    this.isShowList = !this.isShowList;
    this.buttonName = this.isShowList ? 'Hide List' : 'Show List';
  }
}
