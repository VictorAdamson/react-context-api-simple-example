import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
  const context = useContext(AppContext);
  return <h1>{context.appName}</h1>;
}
