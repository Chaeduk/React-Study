import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
// 액션 타입 정의

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 액션 생성 함수 만들기

const initialState = {
  number: 0,
};
// 초기 상태 정의

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);
// 리듀서 함수 만들기

export default counter;
