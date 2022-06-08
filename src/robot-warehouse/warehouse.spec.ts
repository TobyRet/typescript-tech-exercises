import { Warehouse } from "./warehouse";

describe('Warehouse', () => {
  const middle = { x: 5, y: 5 };
  const topRight = { x: 10, y: 10 };
  const topLeft = { x: 0, y: 10 };
  const warehouse = new Warehouse([middle, topRight], { width: 10, height: 10 });

  it('is initialised with crates', () => {
    expect(warehouse.hasCrateAt(middle)).toBe(true);
    expect(warehouse.hasCrateAt(topRight)).toBe(true);
    expect(warehouse.hasCrateAt(topLeft)).toBe(false);
  });

  describe('#hasCrateAt', () => {
    it('returns true if crate is at location', () => {
      expect(warehouse.hasCrateAt(middle)).toBe(true);
      expect(warehouse.hasCrateAt(topRight)).toBe(true);
      expect(warehouse.hasCrateAt(topLeft)).toBe(false);
    });
  });

  describe('#removeCrate', () => {
    it('removes crate from warehouse', () => {
      expect(warehouse.hasCrateAt(middle)).toBe(true);

      warehouse.removeCrate(middle);

      expect(warehouse.hasCrateAt(middle)).toBe(false);
    });
  });

  describe('#addCrate', () => {
    it('adds crate to warehouse', () => {
      const warehouse = new Warehouse([topRight], { width: 10, height: 10 });

      warehouse.addCrate(middle);

      expect(warehouse.hasCrateAt(middle)).toBe(true);
    });
  });
});
