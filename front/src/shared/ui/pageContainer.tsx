import React, { ReactNode } from 'react';

type TProps = {
  children?: ReactNode;
  pageTitle?: string;
};

export const PageContainer = (props: TProps) => {
  return <div className="container mx-auto min-h-screen">{props.children}</div>;
};
