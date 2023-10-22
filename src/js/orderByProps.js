export default function orderByProps(obj, notAlphabetOrder) {
  let alphabetOrder = [];

  for (const key in obj) {
    if (!notAlphabetOrder.includes(key)) {
      alphabetOrder.push(key);
    }
  }
  alphabetOrder = alphabetOrder.sort();

  alphabetOrder = alphabetOrder.map((el) => ({ key: el, value: obj[el] }));

  notAlphabetOrder = notAlphabetOrder.map((el) => ({ key: el, value: obj[el] }));

  return [...notAlphabetOrder, ...alphabetOrder];
}
