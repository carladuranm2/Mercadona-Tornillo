import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-progress',
  templateUrl: './loading-progress.component.html',
  styleUrls: ['./loading-progress.component.scss']
})
export class LoadingProgressComponent {
  @Input('total') goal:number = 0;
  @Input('value') currentProgress:number = 0;
  @Input('color') color:any="#51a73b";
  public height:number = 8;
  public colorTinyLine="#f3f3f5"
  public heightTinyLine:number = 3;

  getProgressValue(value:number){
    if (value>100) {
      return 100;
    }
    return value;
  }
}
