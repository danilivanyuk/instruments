import React, { ReactNode } from 'react';

type TProps = {
  children?: ReactNode;
  pageTitle?: string;
};

export const PageContainer = (props: TProps) => {
  return (
    <div>
      <p>Page title</p>
      {props.children}
    </div>
  );
};
