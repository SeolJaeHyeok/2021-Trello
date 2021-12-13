import { atom, selector } from "recoil";

// enum안의 요소에 값을 주지 않으면 기본적으로 코드 상에서 0, 1, 2 ... 처럼 해석된다.
// 하지만 아래와 같이 기본값을 주게 되면 코드 상에서 내가 할당한 값으로 해석된다.
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDos",
  default: [],
});

// selector는 atom의 반환값을 변형시키는 함수를 의미한다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    // 현재 카테고리와 맞는 toDo list만 반환
    return toDos.filter((toDo) => toDo.category === category);
  },
});
