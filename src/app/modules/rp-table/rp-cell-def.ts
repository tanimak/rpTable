export class RpCellDef {

    private cellType : string;
    private selections: string[];

	constructor(cellType : string, selections: string[]) {
        this.cellType = cellType;
        this.selections = selections;
	}
    
	public get $cellType(): string {
		return this.cellType;
	}

	public set $cellType(value: string) {
		this.cellType = value;
	}

	public get $selections(): string[] {
		return this.selections;
	}

	public set $selections(value: string[]) {
		this.selections = value;
	}


}
