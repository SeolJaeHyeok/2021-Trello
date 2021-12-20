import { atom, selector } from "recoil";

interface IBoardItemAtoms {
  [key: string]: string[];
}

export const BoardItemAtoms = atom<IBoardItemAtoms>({
  key: "BoardItem",
  default: {
    to_do: ["a", "b"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
