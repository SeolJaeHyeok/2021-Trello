import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const BoardContainer = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding-top: 10px;
  width: 250px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThisWith
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  border-radius: 10px;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

interface IBoardProps {
  boardItems: string[];
  boardId: string;
}

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThisWith: boolean;
}

function Board({ boardItems, boardId }: IBoardProps) {
  return (
    <BoardContainer>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardItems.map((item, index) => (
              <DraggableCard key={item} item={item} index={index} />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </BoardContainer>
  );
}

export default Board;
