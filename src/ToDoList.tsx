import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    console.log("Add To Do: ", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("toDo", { required: "Please Write a To Do" })}
          placeholder="Write to do"
        ></input>
        <button>Add</button>
        <span>{errors?.toDo?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
