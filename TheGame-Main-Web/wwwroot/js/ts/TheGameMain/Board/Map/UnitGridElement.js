"use strict";
class UnitGridElement {
    constructor(row, col, textureSrc) {
        this._row = row;
        this._col = col;
        this._textureSrc = textureSrc;
        this._currentUnit = null;
    }
    leaveGrid() {
        this._currentUnit = null;
    }
    enterGrid(enteringUnit) {
        this._currentUnit = enteringUnit;
    }
}
