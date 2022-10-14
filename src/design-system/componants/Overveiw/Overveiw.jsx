import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disc, Icon, OverveiwWrapper, Tittle } from "./Style";

function Overveiw({ icon, tittle, disc }) {
  return (
    <OverveiwWrapper>
      <Icon>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Tittle>{tittle}</Tittle>
      <Disc>{disc}</Disc>
    </OverveiwWrapper>
  );
}

export default Overveiw;
