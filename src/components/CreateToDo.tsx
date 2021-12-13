import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const setToDos = useSetRecoilState(toDoState);
  const onVaild = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(onVaild)}>
      <input
        {...register("toDo", { required: "Please Write a To Do" })}
        placeholder="Write to do"
      ></input>
      <button>Add</button>
      <span>{errors?.toDo?.message}</span>
    </form>
  );
}

export default CreateToDo;
