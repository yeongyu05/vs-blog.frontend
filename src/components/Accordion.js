import React, { useState } from "react";
import styled from "styled-components";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

function Accordion({ title, children, isBold }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <AccordionWrap
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? <VscChevronDown /> : <VscChevronRight />}
        <span>{isBold ? <strong>{title}</strong> : title}</span>
      </AccordionWrap>
      {expanded && <AccordionContentWarp>{children}</AccordionContentWarp>}
    </>
  );
}

export default Accordion;

const AccordionWrap = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 0.8rem;
  padding: 5px 0;
  cursor: pointer;

  > span {
    padding-left: 5px;
    user-select: none;
  }
`;

const AccordionContentWarp = styled.div`
  padding-left: 15px;
  user-select: none;
  cursor: pointer;
`;
