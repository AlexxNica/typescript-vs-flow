type Foo = { type: 'foo' , foo: string };
type Bar = { type: 'bar' , bar: string };
type MyType = Foo | Bar;

export function test(t: MyType) {
  if (t.type === 'baz') { // oops, typo
    console.log((<Bar>t).bar) // had to cast, oops
  }
}