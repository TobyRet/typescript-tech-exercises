import { Robot } from "./robot";
import { Warehouse } from "./warehouse";
import { RobotWarehouseService } from "./robot-warehouse-service";

describe("RobotWarehouseService", () => {
  const bottomLeft = { x: 0, y: 0 };
  const topRight = { x: 10, y: 10 };

  it('can move the robot one space', () => {
    const robot = new Robot(bottomLeft);
    const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
    const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

    robotWarehouseService.moveRobot('N');

    expect(robotWarehouseService.robotLocation()).toEqual({ x: 0, y: 1 });
  });

  describe('pre-validating robot moves', () => {
    it(`throws an error if the move is 'S' and the robot is at the bottom of the warehouse`, () => {
      const robot = new Robot(bottomLeft);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      expect(() => {
        robotWarehouseService.moveRobot('S');
      }).toThrowError('S is not allowed as it will move the robot outside of the warehouse');
    });
    it('throws an error if the move is "E" and the robot is at the right edge of the warehouse', () => {
      const robot = new Robot(topRight);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      expect(() => {
        robotWarehouseService.moveRobot('E');
      }).toThrowError('E is not allowed as it will move the robot outside of the warehouse');
    });
    it('throws an error if the move is "W" and the robot is at the left edge of the warehouse', () => {
      const robot = new Robot(bottomLeft);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      expect(() => {
        robotWarehouseService.moveRobot('W');
      }).toThrowError('W is not allowed as it will move the robot outside of the warehouse');
    });
    it('throws an error if the move is "N" and the robot is at the top of the warehouse', () => {
      const robot = new Robot(topRight);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      expect(() => {
        robotWarehouseService.moveRobot('N');
      }).toThrowError('N is not allowed as it will move the robot outside of the warehouse');
    });
  });

  describe('#robotGrabCrate', () => {
    it('can grab a crate', () => {
      const robot = new Robot(bottomLeft);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      expect(robotWarehouseService.robotHasCrate()).toBe(false);
      expect(robotWarehouseService.crateLocations()).toEqual([bottomLeft, topRight]);

      robotWarehouseService.robotGrabCrate();

      expect(robotWarehouseService.robotHasCrate()).toBe(true);
      expect(robotWarehouseService.crateLocations()).toEqual([topRight]);
    });
  });

  describe('#robotDropCrate', () => {
    it('can drop a crate', () => {
      const robot = new Robot(bottomLeft);
      const warehouse = new Warehouse([bottomLeft, topRight], { width: 10, height: 10 });
      const robotWarehouseService = new RobotWarehouseService(robot, warehouse);

      robotWarehouseService.robotGrabCrate();
      robotWarehouseService.robotDropCrate();

      expect(robotWarehouseService.robotHasCrate()).toBe(false);
      expect(robotWarehouseService.crateLocations()).toEqual(
        expect.arrayContaining([bottomLeft, topRight])
      );
    });
  });
});
