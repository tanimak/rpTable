export class RpColumnDef<T> {
  public columnDef: string;
  public propertyName: string;
  public dataType: string;
  public width: number;

  public constructor(
    columnDef: string,
    propertyName: string,
    dataType: string,
    width: number
  ) {
    this.columnDef = columnDef;
    this.propertyName = propertyName;
    this.dataType = dataType;
    this.width = width;
  }

  public cell(row: T) {
    return row[this.propertyName];
  }

  public getPropertyName() {
    return this.propertyName;
  }

  public getWidth() {
    return { flex: `0 0 ${this.width}%` };
  }
}
