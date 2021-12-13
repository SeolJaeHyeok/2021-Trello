import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
  };
  /* 
  인자를 HTML 요소 안에서 가져오는 방법
  1. 인자를 넘겨받는 함수를 만들고 새 익명함수를 선언하여 인자를 넘겨주는 방법
  2. name 어트리뷰트를 추가한 다음 이벤트 객체 안에서 name을 추출하는 방법
  */
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
