import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RooState} from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RooState> = useSelector;