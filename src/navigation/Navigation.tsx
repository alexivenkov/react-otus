import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { OperationsList } from '@/screens/OperationsList/OperationsList';
import { Profile } from '@/screens/Profile/Profile';
import { Home } from '@/screens/Home/Home';
import { Auth } from '@/screens/Auth/Auth';
import { useSelector } from 'react-redux';
import { initSelectors } from '@/store/init';
import { Initialization } from '@/components/Initialization/Initialization';
import { ProtectedRoute } from '@/navigation/ProtectedRoute';
import { profileSelectors } from '@/store/profile';
import { tokenSelectors } from '@/store/token';

export const Navigation: FC = () => {
  const init = useSelector(initSelectors.get);
  const token = useSelector(tokenSelectors.get);

  return (
    <>
      <BrowserRouter>
        {!init && <Initialization />}
        {init && (
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route
                path={'/profile'}
                element={
                  <ProtectedRoute condition={token.length > 0}>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path={'/operations'}
                element={
                  <ProtectedRoute condition={token.length > 0}>
                    <OperationsList />
                  </ProtectedRoute>
                }
              />
              <Route path={'/auth'} element={<Auth />} />
              <Route path="*" element={'404'} />
            </Routes>
          </Layout>
        )}
      </BrowserRouter>
    </>
  );
};
