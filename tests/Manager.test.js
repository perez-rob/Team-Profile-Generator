const Manager = require("../lib/Manager");

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe("Manager", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with name, id, email, and office number properties corresponding to the given parameters", () => {
      const name = "Bob";
      const id = 13;
      const email = "bob@bob.com";
      const officeNum = 101;
      const testManager = new Manager(name, id, email, officeNum);

      expect(testManager.name).toEqual(name);
      expect(testManager.id).toEqual(id);
      expect(testManager.email).toEqual(email);
      expect(testManager.officeNum).toEqual(officeNum);
    });

    // Exception tests
    it("should throw an error if the office number parameter is not included", () => {
      const name = "Bob-1989";
      const email = "bob@bob.com";
      const id = 13;
      const cb = () => new Manager(name, email, id);
      const err = new Error("Must include office number for Manager");

      expect(cb).toThrowError(err);
    });
    
    it("should throw an error if the name does not contain any letters or contains any characters other than letters, spaces, or dashes", () => {
      const name = "Bob-1989";
      const id = 11;
      const email = "bob@bob.com";
      const officeNum = 101;
      const cb = () => new Manager(name, id, email, officeNum);
      const err = new Error('Employee name must contain at least one letter and only contain letters,single spaces, or dashes');

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email does not contain an @ symbol", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob.com";
      const officeNum = 101;
      const cb = () => new Manager(name, id, email, officeNum);
      const err = new Error('Email must contain an @');

      expect(cb).toThrowError(err);
    });
  });

  describe("getRole", () => {
    it("should return the manager's role when Manager.getRole() is called", () => {
      const name = "Bob";
      const id = 11;
      const email = "bob@bob.com";
      const officeNum = 101;
      const testManager =  new Manager(name, id, email, officeNum);

      expect(testManager.getRole()).toEqual("Manager")
    });
  });
});
