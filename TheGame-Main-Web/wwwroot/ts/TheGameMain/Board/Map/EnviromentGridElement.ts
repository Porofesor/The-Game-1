class EnviromentGridElement {
    // Corodinates
    _row: number;
    _col: number;

    // Src with all textures
    _textureSrc: string[];

    constructor(row: number, col: number, textureSrc: string[]) {
        this._row = row;
        this._col = col;
        this._textureSrc = textureSrc;
    }
}