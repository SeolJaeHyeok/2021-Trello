import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) =>
    props.isDragging ? "#b8c7f08b " : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "2px 3px 15px rgba(0, 0, 0, 0.05)" : "none"};
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

interface IDraggableCardProps {
  itemId: number;
  itemText: string;
  index: number;
}

function DraggableCard({ itemId, itemText, index }: IDraggableCardProps) {
  return (
    <Draggable key={itemId} draggableId={itemId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {itemText}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
