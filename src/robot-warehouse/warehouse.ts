import { Coordinates, GridSize } from "./types/types";

export class Warehouse {
  public readonly crateLocations: Coordinates[];
  public readonly gridWidth: number;
  public gridHeight: number;

  constructor(crateLocations: Coordinates[], gridSize: GridSize) {
    this.crateLocations = crateLocations;
    this.gridWidth = gridSize.width;
    this.gridHeight = gridSize.height;
  }

  public hasCrateAt(coordinates: Coordinates): boolean {
    return this.crateLocations.some(crate => crate.x === coordinates.x && crate.y === coordinates.y);
  }

  public removeCrate(coordinates: Coordinates): void {
    if(this.hasCrateAt(coordinates)) {
      this.crateLocations.splice(this.crateLocations.indexOf(coordinates), 1);
    } else {
      throw new Error(`There is no crate at ${JSON.stringify(coordinates)}`);
    }
  }

  public addCrate(coordinates: Coordinates): void {
    if(!this.hasCrateAt(coordinates)) {
      this.crateLocations.push(coordinates);
    } else {
      throw new Error(`There is already a crate at ${JSON.stringify(coordinates)}`);
    }
  }
}
