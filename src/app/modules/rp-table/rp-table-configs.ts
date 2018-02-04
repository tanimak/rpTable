export class RpTableConfigs {
  private enableSelect: boolean;
  private enableSort: boolean;
  private enablePaginator: boolean;
  private enableTitle: boolean;
  private enableHeaders: boolean;
  private enableFilter: boolean;
  private paginatorConfigs: number[];
  private enableBoarders: boolean;

  constructor(
    $enableSelect : boolean,
    $enableSort: boolean,
    $enablePaginator: boolean,
    $enableTitle: boolean,
    $enableHeaders: boolean,
    $enableFilter: boolean,
    $paginatorConfigs: number[],
    $enableBoarders: boolean
  ) {
    this.enableSelect = $enableSelect;
    this.enableSort = $enableSort;
    this.enablePaginator = $enablePaginator;
    this.enableTitle = $enableTitle;
    this.enableHeaders = $enableHeaders;
    this.enableFilter = $enableFilter;
    this.paginatorConfigs = $paginatorConfigs;
    this.enableBoarders = $enableBoarders;
  }

  public isEnableSort(): boolean {
    return this.enableSort;
  }

  public isEnableSelect(): boolean {
    return this.enableSelect;
  }

  public isEnablePaginator(): boolean {
    return this.enablePaginator;
  }

  public isEnableTitle(): boolean {
    return this.enableTitle;
  }

  public isEnableHeaders(): boolean {
    return this.enableHeaders;
  }

  public getPaginatorConfigs(): number[] {
    return this.paginatorConfigs;
  }

  public isEnableBoarders(): boolean {
    return this.enableBoarders;
  }

  public isEnableFilter(): boolean {
    return this.enableFilter;
  }
}
