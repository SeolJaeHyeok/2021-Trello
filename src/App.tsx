import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoardItemAtoms } from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

function App() {
  const [boardItem, setBoardItem] = useRecoilState(BoardItemAtoms);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    /* setBoardItem((oldItem) => {
      const copyItems = [...oldItem];
      // 1) Delete Item on source.index
      copyItems.splice(source.index, 1);
      // 2) Put back Item on destination.index
      copyItems.splice(destination?.index, 0, draggableId);
      return copyItems;
    }); */
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(boardItem).map((boardId) => (
            <Board
              key={boardId}
              boardId={boardId}
              boardItems={boardItem[boardId]}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
