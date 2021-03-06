import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { LoadAction as StocksLoadAction } from './store/actions/stocks';
import { mockStocksData } from './data/finance-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Best Stocks App';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new StocksLoadAction(this.mockDataToPayload(mockStocksData)));
  }

  private mockDataToPayload(data) {
    const result: any[] = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const val = { ...data[key]};
        val.name = key;
        result.push(val);
      }
    }
    return result;
  }
}
