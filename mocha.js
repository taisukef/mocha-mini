import * as t from "https://deno.land/std/testing/asserts.ts";

const describe = (name, f) => {
  console.log(name);
  f();
};
const context = (name, f) => {
  console.log(name);
  f();
};
const it = (name, f) => {
  console.log(name);
  f();
};
const expect = (val1) => {
  return {
    "to": {
      "be": (val2) => {
        //console.log(val1, val2);
        t.assertEquals(val1, val2)
      },
      "throwError": () => {
        try {
          val1();
          t.fail();
        } catch (e) {
          //t.ok();
        }
      }
    }
  };
};
export { expect, it, describe, context };
