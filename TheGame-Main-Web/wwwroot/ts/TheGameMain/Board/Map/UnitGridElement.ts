class UnitGridElement {
    // Corodinates
    _row: number;
    _col: number;

    // Src with all textures
    _textureSrc: string[] | null;

    _currentUnit: IUnit | null;
    constructor(row: number, col: number, textureSrc: string[]) {
        this._row = row;
        this._col = col;
        this._textureSrc = textureSrc;
        this._currentUnit = null;
    }

    leaveGrid(): void {
        this._currentUnit = null;
    }

    enterGrid(enteringUnit: IUnit): void {
        this._currentUnit = enteringUnit;
    }
}