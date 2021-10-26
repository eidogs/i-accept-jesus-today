/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <React.Fragment>
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
    </React.Fragment>
  );
}
