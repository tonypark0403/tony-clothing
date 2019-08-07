import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

export default Directory;
