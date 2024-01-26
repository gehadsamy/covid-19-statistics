import React, { ReactNode } from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface LoaderProps extends IContentLoaderProps {
  children?: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children, ...rest }) => {
  return (
    <ContentLoader
      backgroundColor="#252f3f"
      foregroundColor="#374151"
      {...rest}
    >
      {children}
    </ContentLoader>
  );
};

export default Loader;
