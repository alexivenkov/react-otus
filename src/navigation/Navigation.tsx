import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout/Layout';
import { OperationsList } from '@/screens/OperationsList/OperationsList';
import { Profile } from '@/screens/Profile/Profile';
import { Home } from '@/screens/Home/Home';

export const Navigation: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/operations'} element={<OperationsList />} />
          <Route path="*" element={'404'} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
