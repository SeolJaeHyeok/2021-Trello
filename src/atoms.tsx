import { atom, selector } from "recoil";

export interface IBoardItem {
  id: number;
  text: string;
}

export interface IBoardItemAtoms {
  [key: string]: IBoardItem[];
}

export const BoardItemAtoms = atom<IBoardItemAtoms>({
  key: "BoardItem",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
