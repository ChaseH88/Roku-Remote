import { useContext } from "react";
import { State } from "../state";

const useDispatch = (): any => useContext(State)[1];

export { useDispatch };