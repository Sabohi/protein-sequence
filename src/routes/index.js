import React from 'react';
import { Redirect } from 'react-router';
import Proteins from '@/containers/Proteins';
import PublicRoute from '@/containers/PublicRoute';
import NotFound from '@/components/NotFound';
import { GLOBALCONSTANTS } from '@/utils/GlobalConstants';

const {
  REACT_ROUTES: {
    HOME_COM,
    NOT_FOUND_COMPONENT,
  },
} = GLOBALCONSTANTS;
export const routes = [
  <PublicRoute key="Home" path={HOME_COM} component={Proteins} exact restricted={false} />,
  <PublicRoute key="NotFoundComponent" path={NOT_FOUND_COMPONENT} component={NotFound} exact restricted={false} />,
  <Redirect key="*" from="*" to="/404" />,
];
