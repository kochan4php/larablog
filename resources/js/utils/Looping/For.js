import { Children } from "react";

const For = ({ each, render }) =>
  Children.toArray(each?.map((item, index) => render(item, index)));

export default For;
