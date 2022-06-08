import { Robot } from "./robot";
import { Move } from "./types/types";

describe("Robot", () => {
  const bottomLeft = { x: 0, y: 0 };

  it("can move one space", () => {
    const robot = new Robot(bottomLeft);

    robot.move(Move.N);

    expect(robot.location).toEqual({ x: 0, y: 1 });
  });

  it('can move multiple spaces', () => {
    const robot = new Robot(bottomLeft);

    robot.move('N,E,S,W');

    expect(robot.location).toEqual(bottomLeft);
  });


  it('cannot move if a move is invalid', () => {
    const robot = new Robot(bottomLeft);

    expect(() => { robot.move('X')}).toThrowError('X is not a valid move')
  });
});
