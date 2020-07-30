import React from "react";

const FullPageLayout = ({ children, ...rest }) => {
   return (
      <div>
         <main className="main text-muted">{children}</main>
      </div>
   );
};

export default FullPageLayout;
