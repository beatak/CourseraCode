import path from 'path';
import child_process from 'child_process';
import test from 'ava';

import QuickFind from '../src/quick-find.js';

test('Initialize', t => {
  const length = 5;
  const instance = new QuickFind(length);
  t.true(Array.isArray(instance.ids));
  t.true(instance.ids.length === length);
  t.true(typeof instance.union === 'function');
  t.true(typeof instance.connected === 'function');
});

test('10 nodes', t => {
  const length = 10;
  const instance = new QuickFind(length);
  instance.union(4, 3);
  instance.union(3, 8);
  instance.union(6, 5);
  instance.union(9, 4);
  instance.union(2, 1);
  t.true(instance.connected(8, 9));
  t.false(instance.connected(5, 0));
  instance.union(5, 0);
  instance.union(7, 2);
  instance.union(6, 1);
  t.true(instance.connected(0, 7));
  t.false(instance.connected(9, 0));
  console.log(JSON.stringify(instance.ids));
});
