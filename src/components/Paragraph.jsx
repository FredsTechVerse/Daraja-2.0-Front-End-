import React from "react";

const Paragraph = ({ onMouseOver }) => {
  return (
    <p className="bg-slate-400 rounded p-2 mx-auto" onMouseOver={onMouseOver}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo id nostrum
      dolorem, inventore aperiam pariatur iure quaerat. Ad incidunt nulla
      corporis quaerat consequatur sequi suscipit numquam at aut, cupiditate
      consequuntur?
    </p>
  );
};

export default Paragraph;
