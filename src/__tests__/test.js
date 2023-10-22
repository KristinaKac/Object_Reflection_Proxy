import orderByProps from '../js/orderByProps';
import destructuring from '../js/destructuring';

test('test destructuring', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };

  const correctResult = [
    {
      id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
    },
    {
      id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
    }];

  const result = destructuring(obj);
  expect(result).toStrictEqual(correctResult);
});

test('test orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const notAlphabetOrder = ['name', 'level'];

  const correctResult = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  const result = orderByProps(obj, notAlphabetOrder);

  expect(result).toStrictEqual(correctResult);
});
