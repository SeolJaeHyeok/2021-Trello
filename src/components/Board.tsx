import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { BoardItemAtoms, IBoardItem } from "../atoms";
import DraggableCard from "./DraggableCard";

const BoardContainer = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding-top: 10px;
  width: 250px;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  boardItems: IBoardItem[];
  boardId: string;
}

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThisWith: boolean;
}

interface IForm {
  toDo: string;
}

function Board({ boardItems, boardId }: IBoardProps) {
  const setBoardItems = useSetRecoilState(BoardItemAtoms);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newItem = {
      id: Date.now(),
      text: toDo,
    };
    setBoardItems((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newItem],
      };
    });
    setValue("toDo", "");
  };
  return (
    <BoardContainer>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        ></input>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardItems.map((item, index) => (
              <DraggableCard
                key={item.id}
                itemId={item.id}
                itemText={item.text}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </BoardContainer>
  );
}

export default Board;
