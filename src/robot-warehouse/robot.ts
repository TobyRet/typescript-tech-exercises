import { Coordinates, Move } from './types/types';

export class Robot {
  public location: Coordinates;

  public hasCrate = false;

  constructor(startingLocation: Coordinates = { x: 0, y: 0 }) {
    this.location = startingLocation;
  }

  public move(commands: string): void {
    const moves = commands.split(',');

    moves.forEach((move) => {
      return this.updateLocation(move);
    });
  }

  public grabCrate(): void {
    this.hasCrate = true;
  }

  public dropCrate(): void {
    this.hasCrate = false;
  }

  private updateLocation(move: string) {
    switch (move) {
      case Move.N:
        this.location = { x: this.location.x, y: this.location.y + 1 };
        return;
      case Move.E:
        this.location = { x: this.location.x + 1, y: this.location.y };
        return;
      case Move.S:
        this.location = { x: this.location.x, y: this.location.y - 1 };
        return;
      case Move.W:
        this.location = { x: this.location.x - 1, y: this.location.y };
        return;
      default:
        throw new Error(`${move} is not a valid move`);
    }
  }
}
