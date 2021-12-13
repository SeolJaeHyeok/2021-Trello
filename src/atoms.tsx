import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
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
