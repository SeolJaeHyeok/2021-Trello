import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoardAtoms } from "../atoms";
import Button from "./Button";

const Header = styled.header`
  width: 270px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const BoardForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border-radius: 4px;
  margin: 10px 0px;
  border: none;
  padding: 8px 10px;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
`;

interface IBoardForm {
  boardTitle: string;
}

function CreateBoard() {
  const { register, setValue, handleSubmit } = useForm<IBoardForm>();
  const [board, setBoard] = useRecoilState(BoardAtoms);
  const onValid = ({ boardTitle }: IBoardForm) => {
    // console.log(board);
    if (boardTitle === "") return;
    setValue("boardTitle", "");

    if (Object.keys(board).indexOf(boardTitle) !== -1) return;
    setBoard((prev) => ({ ...prev, [boardTitle + ""]: [] }));
  };

  return (
    <Header>
      <Label>Make Your Board</Label>
      <BoardForm onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("boardTitle", { required: true })}
          placeholder="Make Your Own Board!"
        ></Input>
        <Button text="Add" />
      </BoardForm>
    </Header>
  );
}

export default CreateBoard;
