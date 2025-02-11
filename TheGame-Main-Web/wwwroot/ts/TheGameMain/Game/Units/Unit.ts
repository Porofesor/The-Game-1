class Unit implements IUnit {
    _name: string;
    _health: number;
    _player: number;

    constructor(name: string, health: number, player: number) {
        this._name = name;
        this._health = health;
        this._player = player;
    }
}