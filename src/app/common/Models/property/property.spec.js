import test from 'ava';
import Property from './property';

// ----------------------------------------------
// Set up Tests
// ----------------------------------------------
let property;

test.beforeEach(() => {
  property = Property({ key: 'name' });
});

// ----------------------------------------------
// Tests
// ----------------------------------------------
test('Property with only a key ', t => {
  t.truthy(property.getKey(), 'should have a property key when specified and');
  t.falsy(property.value, 'should not have a value if not specified');
  t.falsy(property.isRequired(), 'should not be required by default and ');
  t.false(property.isValid(), 'should not be valid when there is no value');
});

test('Property with a key and value', t => {
  property.value = 'MIT';

  t.truthy(property.value, 'should have a value');
  t.true(property.isValid(), 'should be valid when there is a value');
});

test('Property with a key, value and is required', t => {
  property.value = 'MIT';
  t.true(property.isValid(), 'should be valid when the value is not null or falsy');

  property.value = undefined;
  t.false(property.isValid(),
  'should be invalid when property is required and  its missing a value');
});
