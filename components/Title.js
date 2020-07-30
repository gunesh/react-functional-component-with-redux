import React from "react";
function Title() {
  console.log('render title ');
  return <div>Title</div>;
}
export default React.memo(Title);
