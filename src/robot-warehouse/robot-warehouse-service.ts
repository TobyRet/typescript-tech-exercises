import { Robot } from "./robot";
import { Warehouse } from "./warehouse";
import { Coordinates, Move } from "./types/types";

export class RobotWarehouseService {
  private readonly robot: Robot;
  private readonly warehouse: Warehouse;

  constructor(robot: Robot, warehouse: Warehouse) {
    this.robot = robot;
    this.warehouse = warehouse;
  }

  public moveRobot(commands: string): void {
    const moves = commands.split(',') as Move[];

    moves.forEach((direction) => {
      this.robotMovingBeyondWarehouse(direction);
      return this.robot.move(direction);
    });
  }

  public robotLocation(): Coordinates {
    return this.robot.location;
  }

  public robotGrabCrate(): void {
    this.robot.grabCrate();
    this.warehouse.removeCrate(this.robot.location);
  }

  public robotHasCrate(): boolean {
    return this.robot.hasCrate;
  }

  public robotDropCrate(): void {
    this.robot.dropCrate();
    this.warehouse.addCrate(this.robot.location);
  }

  public crateLocations(): Coordinates[] {
    return this.warehouse.crateLocations;
  }

  private robotMovingBeyondWarehouse(direction: Move): void {
    if ((direction === Move.N && this.robot.location.y === this.warehouse.gridHeight) ||
      (direction === Move.E && this.robot.location.x === this.warehouse.gridWidth) ||
      (direction === Move.S && this.robot.location.y === 0) ||
      (direction === Move.W && this.robot.location.x === 0)) {
      throw new Error(`${direction} is not allowed as it will move the robot outside of the warehouse`);
    }
  }
}
