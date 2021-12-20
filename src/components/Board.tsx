import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const BoardContainer = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

interface IBoardProps {
  boardItems: string[];
  boardId: string;
}

function Board({ boardItems, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
          {boardItems.map((item, index) => (
            <DraggableCard key={item} item={item} index={index} />
          ))}
          {provided.placeholder}
        </BoardContainer>
      )}
    </Droppable>
  );
}

export default Board;
