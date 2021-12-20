import { atom, selector } from "recoil";

export const saveBoard = (item: IBoard) =>
  localStorage.setItem("BOARD", JSON.stringify(item));

export const loadBoard = (): IBoard | null => {
  const board = localStorage.getItem("BOARD");
  if (board) return JSON.parse(board);
  return null;
};

export interface IBoardItem {
  id: string;
  text: string;
}

export interface IBoard {
  [key: string]: IBoardItem[];
}

export const BoardAtoms = atom<IBoard>({
  key: "board",
  default: loadBoard() ?? {},
});
