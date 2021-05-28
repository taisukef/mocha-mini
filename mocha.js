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
    },
    "toBe": (val2) => {
      t.assertEquals(val1, val2)
    },
    "toBeUndefined": () => {
      t.assertEquals(val1, undefined)
    },
    "toEqual": (val2) => {
      t.assertEquals(val1, val2)
    },
    "toMatch": (val2) => {
      if (!val1.match(new RegExp(val2))) {
        new Error();
      }
    },
    "toThrow": () => {
      try {
        val1();
        t.fail();
      } catch (e) {
        //t.ok();
      }
    }
  };
};
const test = Deno.test;
export { expect, it, describe, context, test };
