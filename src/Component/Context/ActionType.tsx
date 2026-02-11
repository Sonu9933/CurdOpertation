import {Car} from "./InitialState";

export type CarAction =
  | { type: 'ADD_CAR'; payload: Car }
  | { type: 'REMOVE_CAR'; payload: number }
  | { type: 'LOOK_CAR'; payload: number }
  | { type: 'GET_CAR'; payload: Car[] }
  |  { type: 'UPDATE_CAR'; payload: Car }
  | { type: 'SEARCH_CAR'; payload: string };
