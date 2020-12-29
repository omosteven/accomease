import React from "react";

const CustomDialogContent = props => {
  const content = props.content;
  const color = props.color;

  return (
    <div style={{ background: "white", minHeight: "10em", width: "70%" }}>
      <div style={{ marginLeft: "1em" }}>
        <h3>{content.title}</h3>
        <h5 style={{ color: color }}>{content.desc1}</h5>
        <h5 style={{ color: color }}>{content.desc2}</h5>
      </div>
    </div>
  );
};

export default CustomDialogContent;
