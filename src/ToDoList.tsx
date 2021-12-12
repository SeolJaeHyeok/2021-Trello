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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  passwordConfirmation: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "You can only use naver email",
            },
          })}
          placeholder="Email"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.email?.message}
        </span>
        <input
          {...register("firstName", { required: "First Name is required" })}
          placeholder="firstName"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.firstName?.message}
        </span>
        <input
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="lastName"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.lastName?.message}
        </span>
        <input
          {...register("userName", {
            required: "User Name is required",
            minLength: {
              value: 10,
              message: "User Name have to more than 10!!",
            },
          })}
          placeholder="userName"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.userName?.message}
        </span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 5, message: "Password is too short" },
          })}
          placeholder="password"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.password?.message}
        </span>
        <input
          {...register("passwordConfirmation", {
            required: true,
            minLength: {
              value: 5,
              message: "Password have to More than 5!!",
            },
          })}
          placeholder="passwordConfirmation"
        ></input>
        <span style={{ color: "white", fontSize: "36" }}>
          {errors?.passwordConfirmation?.message}
        </span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
