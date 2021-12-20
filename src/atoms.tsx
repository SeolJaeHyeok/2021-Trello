import { atom, selector } from "recoil";

export interface IBoardItemAtoms {
  [key: string]: string[];
}

export const BoardItemAtoms = atom<IBoardItemAtoms>({
  key: "BoardItem",
  default: {
    "To Do": ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["f"],
  },
});
