import { IGuitar } from './types';

export const parseDoc = (data: string) => {
  const newData: IGuitar[] = [];
  const index = data.indexOf('1');

  data = data.slice(index);

  const result = data.split(/\r\n|\r|\n/g);

  result.forEach((item) => {
    const elements = item.split(',');
    const newElement = {
      number: elements[0],
      code: elements[1],
      name: elements[2],
      type: elements[3],
      popularity: elements[4],
      strings: elements[5],
      price: elements[6],
    };
    newData.push(newElement);
  });

  return newData;
};
