export default function destructuring(obj) {
  const arr = [];
  obj.special.forEach((el) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = el;

    arr.push({
      id, name, description, icon,
    });
  });
  return arr;
}
