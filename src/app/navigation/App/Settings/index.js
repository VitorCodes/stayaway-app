/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AppRoutes from '@app/navigation/routes';

import InfoScreen from '@settings/containers/InfoScreen';
import OperationScreen from '@settings/containers/OperationScreen';
import TrackingScreen from '@settings/containers/TrackingScreen';
import DebugScreen from '@settings/containers/DebugScreen';
import TechnicalSheetScreen from '@settings/containers/TechnicalSheetScreen';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    initialRouteName={AppRoutes.INFO}
    headerMode='none'
  >
    <Screen
      name={AppRoutes.INFO}
      component={InfoScreen}
    />
    <Screen
      name={AppRoutes.OPERATION}
      component={OperationScreen}
    />
    <Screen
      name={AppRoutes.TRACKING}
      component={TrackingScreen}
    />
    <Screen
      name={AppRoutes.DEBUG}
      component={DebugScreen}
    />
    <Screen
      name={AppRoutes.TECHNICAL_SHEET}
      component={TechnicalSheetScreen}
    />
  </Navigator>
);