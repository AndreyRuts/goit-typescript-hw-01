type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Pick<AllType, 'name' | 'color'>,
    U extends Pick<AllType, 'position' | 'weight'>>
    (top: T, bottom: U) {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

// const user: AllType = {
//     name: 'someName',
//     position: 5,
//     color: 'someColor',
//     weight: 10
// }

// console.log(compare(user, user));