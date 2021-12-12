import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [todo, setTodo] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setTodo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          placeholder="Write to do"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true })}
          placeholder="Email"
        ></input>
        <input
          {...register("firstName", { required: true })}
          placeholder="firstName"
        ></input>
        <input
          {...register("lastName", { required: true })}
          placeholder="lastName"
        ></input>
        <input
          {...register("userName", { required: true, minLength: 10 })}
          placeholder="userName"
        ></input>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "Password is too short" },
          })}
          placeholder="password"
        ></input>
        <input
          {...register("passwordConfirmation", {
            required: true,
            minLength: 5,
          })}
          placeholder="passwordConfirmation"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
