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
  const onDragEnd = (dropInfo: DropResult) => {
    const { destination, source, draggableId } = dropInfo;

    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // Same Board Movement
      setBoardItem((allBoards) => {
        const boardItems = [...allBoards[source.droppableId]];
        boardItems.splice(source.index, 1);
        boardItems.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: boardItems,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      // Cross Board Movement
      setBoardItem((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
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
