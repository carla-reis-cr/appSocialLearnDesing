import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

import  BottomTabs  from '../components/BottomTabs';

const Dashboard = () => (

  <BottomTabs/>
);

export default memo(Dashboard);