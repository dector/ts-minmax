import { assertEquals } from "@std/assert";
import { minMax } from "../src/main.ts";

Deno.test("verify minMax", () => {
  assertEquals(minMax([]), [NaN, NaN]);
  assertEquals(minMax([5, 10, 2, 0]), [0, 10]);
  assertEquals(minMax([5, 10, -1, 2, 100]), [-1, 100]);
});

