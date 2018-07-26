const { createAction } = require('./index');

describe('Create Action with arguments', () => {
  const type = 'WRITE_NAME_ON_BOARD';
  const drinkWater = createAction(type, 'name');

  test('Name should equal `Jest`', () => {
    expect(drinkWater('Jest'))
      .toStrictEqual({ type, name: 'Jest' });
  });

  test('Name should equal `undefined` when no value passed', () => {
    expect(drinkWater())
      .toStrictEqual({ type, name: undefined });
  });

  test('Action should return the right number of params', () => {
    const type_r = 'CONTINUE_READING';
    const continueReading = createAction(type_r, 'book', 'chapter', 'page');
    expect(continueReading('The Alchemist', 2, 26))
      .toStrictEqual({ type: type_r, book: 'The Alchemist', chapter: 2, page: 26 });
  });

  test('Should console.warn when passing something else than a string for action argument', () => {
    const action = createAction(type, { falsey: 'object' });
    expect(action()).toStrictEqual({ type })
  });
});

describe('Create Action without any arguments', () => {
  const type = 'SIT_ON_CHAIR';

  test('Passing no arguments should return `{ type: <name> }`', () => {
    const action = createAction(type);
    expect(action()).toStrictEqual({ type });
  });

  test('Passing an argument to a non-argument declared action should only return the type', () => {
    const action = createAction(type);
    expect(action(false)).toStrictEqual({ type });
  });

  test('Passing `null` as an action argument should not be rendered as an actual argument', () => {
    const action = createAction(type, null);
    expect(Object.keys(action())).not.toContain('null');
  });

  test('Passing `undefined` as an action argument should not be rendered as an actual argument', () => {
    const action = createAction(type, undefined);
    expect(Object.keys(action())).not.toContain('undefined');
  });
});
