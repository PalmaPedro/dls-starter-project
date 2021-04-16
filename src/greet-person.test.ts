import { greetPerson } from "./greet-person";

test("greetPerson returns the greeting with the person name", () => {
  const name = "Alin";
  const greeting = greetPerson(name);
  expect(greeting).toBe("Hello, Alin!");
});

test("greetPerson greets an anonymous person when no name is specified", () => {
  const greeting = greetPerson();
  expect(greeting).toBe("Hello, anonymous!");
});
