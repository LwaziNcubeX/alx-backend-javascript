// tasks.test.js
import * as tasks from "./0-constants";

test('taskFirst returns "I prefer const when I can."', () => {
  expect(tasks.taskFirst()).toBe("I prefer const when I can.");
});

test('getLast returns " is okay"', () => {
  expect(tasks.getLast()).toBe(" is okay");
});

test("taskNext returns a combination of strings", () => {
  expect(tasks.taskNext()).toBe("But sometimes let is okay");
});
