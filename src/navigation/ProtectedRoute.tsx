import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  condition: boolean;
  children: React.ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = (props: ProtectedRouteProps) => {
  if (!props.condition) {
    return <Navigate to={'/'} />;
  }
  return <>{props.children}</>;
};
