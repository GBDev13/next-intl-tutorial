import React, { HTMLAttributes } from "react";

export const Container = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}