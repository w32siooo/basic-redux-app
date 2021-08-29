import { applyMiddleware } from "redux";
import { exampleMiddleWare } from "./exampleMiddleWare";

export default applyMiddleware(
    exampleMiddleWare
)
