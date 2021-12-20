import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

interface IDraggableCardProps {
  item: string;
  index: number;
}

function DraggableCard({ item, index }: IDraggableCardProps) {
  return (
    <Draggable key={item} draggableId={item} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {item}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
