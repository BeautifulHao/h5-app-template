import React, { FC } from 'react';
import NavBar from '../../components/nav-bar/index';
import './index.less';

const Compass: FC<any> = (props: any) => {
  return (
    <div className="compass-root">
      <NavBar
        title="发现"
        iconLeft="#back"
        leftClick={() => props.history.goBack()}
      />
      <div className="compass-content">
        <h1>Discover</h1>
        <h2>Discover</h2>
        <h3>Discover</h3>
      </div>
    </div>
  );
};

export default Compass;
