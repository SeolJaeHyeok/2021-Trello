import { useEffect } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoardAtoms, saveBoard } from "./atoms";
import Board from "./components/Board";
import CreateBoard from "./components/CreateBoard";

const Wrapper = styled.main`
  width: min-content;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
`;

const TrashWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  right: 30%;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.5);
    color: white;
  }
`;

const Trash = styled.div`
  width: 50px;
  height: 50px;
`;

function App() {
  const [board, setBoard] = useRecoilState(BoardAtoms);

  const onDragEnd = (dropInfo: DropResult) => {
    const { destination, source, type } = dropInfo;
    if (!destination || !source) return;

    // Delete Logic
    if (destination.droppableId === "trash-card") {
      // Delete BoardItem on Board
      setBoard((prev) => {
        const new_item = [...board[source.droppableId]];
        new_item.splice(source.index, 1);
        return { ...prev, [source.droppableId]: new_item };
      });
      return;
    } else if (destination.droppableId === "trash-board") {
      // Delete Board
      setBoard((prev) => {
        const new_board = { ...prev };
        delete new_board[dropInfo.draggableId];
        return new_board;
      });
      return;
    }

    // Movement Logic
    if (type === "board") {
      // Board Movement
      setBoard((prev) => {
        const new_board = Object.entries(prev);
        const [temp] = new_board.splice(source.index, 1);
        new_board.splice(destination?.index, 0, temp);
        return new_board.reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: value,
          }),
          {}
        );
      });
    } else if (type === "card") {
      // Card Movement
      if (source.droppableId === destination.droppableId) {
        // Same Board Movement
        const new_arr = [...board[source.droppableId]];
        const [temp] = new_arr.splice(source.index, 1);
        new_arr.splice(destination.index, 0, temp);
        setBoard((prev) => ({ ...prev, [source.droppableId]: new_arr }));
      } else {
        // Cross Board Movement
        const first_arr = [...board[source.droppableId]];
        const second_arr = [...board[destination.droppableId]];
        const [temp] = first_arr.splice(source.index, 1);
        second_arr.splice(destination.index, 0, temp);
        setBoard((prev) => ({
          ...prev,
          [source.droppableId]: first_arr,
          [destination.droppableId]: second_arr,
        }));
      }
    }
  };

  // Change UI when board changed
  useEffect(() => {
    saveBoard(board);
  }, [board]);

  return (
    <>
      <CreateBoard />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="board">
          {(provided) => (
            <Wrapper ref={provided.innerRef} {...provided.droppableProps}>
              {Object.keys(board).map((item, index) => (
                <Board key={index} boardTitle={item} index={index} />
              ))}
              {provided.placeholder}
            </Wrapper>
          )}
        </Droppable>
        <TrashWrapper>
          <Droppable droppableId="trash-card" type="card">
            {(provided) => (
              <Trash ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
              </Trash>
            )}
          </Droppable>
          <i className="far fa-trash-alt fa-3x" style={{ color: "white" }}></i>
          <Droppable droppableId="trash-board" type="board">
            {(provided) => (
              <Trash ref={provided.innerRef} {...provided.droppableProps}>
                {provided.placeholder}
              </Trash>
            )}
          </Droppable>
        </TrashWrapper>
      </DragDropContext>
    </>
  );
}

export default App;
