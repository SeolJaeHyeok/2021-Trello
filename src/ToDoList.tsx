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
  const { register, watch } = useForm();
  console.log(register("todo"));
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email"></input>
        <input {...register("firstName")} placeholder="firstName"></input>
        <input {...register("lastName")} placeholder="lastName"></input>
        <input {...register("userName")} placeholder="userName"></input>
        <input {...register("password")} placeholder="password"></input>
        <input
          {...register("passwordConfirmation")}
          placeholder="passwordConfirmation"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
