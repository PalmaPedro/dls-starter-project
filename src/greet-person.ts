export const greetPerson = (personName?: string) => {
  return `Hello, ${personName || "anonymous"}!`;
};
