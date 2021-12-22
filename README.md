# MyTrello

## Overview

Trello의 Board, Card의 추가, 삭제 기능 및 Drag&Drop 기능 구현

You can enjoy this App [Here]([https://flamboyant-wright-29843b.netlify.app](https://flamboyant-wright-29843b.netlify.app/))

## Features

- [x] Board를 생성하고 해당 Board에 Card 생성
- [x] Drag&Drop을 통해 Board 및 Card의 이동 및 삭제 가능
- [x] Recoil을 이용하여 State 관리
- [x] Local Storage를 사용하여 사용자의 정보를 저장 및 불러오기

## Dependency

- [x] TypeScript
- [x] recoil 
- [x] React-beautiful-dnd
- [x] react-hook-form

## 회고

react-beautiful-dnd를 이용하여 Drag&Drop을 구현해봤는데 처음 사용해본 패키지라 익숙하지 않아서 힘들었다. 강의 영상을 통해 기본적인 사용 방법을 배운 뒤 공식 문서나 구글링을 통해 추가적인 사용법을 배우고 적용했다.

이동, 추가, 삭제 기능을 구현할 때 react-beautiful-dnd가 제공하는 props들을 어떻게 이용하면 될까에 대한 고민이 있었고 해당 props들을 이용하여 구현했다. 

또한 recoil의 경우에도 이번에 처음 배우게된 상태 관리 라이브러리인데 redux보다 러닝 커브가 훨씬 낮다고 생각됐다. state management는 근본적으로 부모에서 자식으로 state를 계속해서 보내는 것이 아닌 state가 필요한 컴포넌트가 하나의 저장소에 저장된 state를 가지고 오는 것으로 알고 있었고 recoil 또한 같은 개념으로 접근을 하니 조금 더 수월하게 학습할 수 있었던 것 같다.

추가적으로 redux로 상태관리를 하기 위해 많은 기초 템플릿들이 필요한 것에 반해 recoil은 많은 코드가 필요하지 않았다. 그래서 생각보다 어렵지 않게 적용할 수 있었다.



