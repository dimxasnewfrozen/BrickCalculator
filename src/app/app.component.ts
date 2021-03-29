import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuttingboard';

  private scaleFactor = 50;

  public realWidth = 10;
  public pixelWidth = this.realWidth * this.scaleFactor;
  public columns: string = "2";
  public rows = new Array(4);

  public columnWidth: number = 0;
  public halfWidth: number = 0;
  public totalColumns = new Array(this.columns);

  public result = "";

  ngOnInit(): void {
    this.calculate();
  }

  calculate() {
    if (this.columns == "" || this.rows.length == 0)
      return;

    this.pixelWidth = this.realWidth * this.scaleFactor;
    this.totalColumns = new Array(parseInt(this.columns));
    this.columnWidth = this.pixelWidth / (parseInt(this.columns) + .5);
    this.halfWidth = this.columnWidth / 2;

    const pieceWidthResult = this.realWidth / (parseInt(this.columns) + .5);
    
    this.result = this.columns + " pieces at " + pieceWidthResult + " (mm/inches) and 1 at " + pieceWidthResult/2 + " (mm/inches)";
  }
}


