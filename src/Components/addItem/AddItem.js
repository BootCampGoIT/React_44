import React from "react";
import { AddItemContainer } from "./AddItemStyled";
import sprite from "../../icons/main/main.svg";

const AddItem = ({ toggle }) => {
  return (
    <AddItemContainer onClick={toggle}>
      <div className='addItemContainer'>
        <svg className='addItemIcon'>
          <use href={sprite + "#icon-plus"} />
        </svg>
      </div>
    </AddItemContainer>
  );
};

export default AddItem;
