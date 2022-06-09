import React from "react";
import styled from "styled-components";
export default function CustomDots({ onClick, ...rest }) {
  const { active } = rest;
  return (
    <Item>
      <Circle
        onClick={(e) => {
          onClick();
          e.preventDefault();
        }}
        active={active}
      />
    </Item>
  );
}

const Item = styled.li`
  display: list-item;
  list-style: none;
`;

const Circle = styled.button`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-right: 4px;
  border: 0;
  transition: background-color 0.3s;
  background-color: ${({ active }) =>
    active ? "#f7f7f7" : "rgba(247, 247, 247, 0.33)"};
  cursor: pointer;
`;
