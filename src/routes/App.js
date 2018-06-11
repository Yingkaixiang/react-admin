import React from 'react';
import { connect } from 'dva'; 
import { withRouter } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import styles from './App.less';
import SiderMenu from '../components/SiderMenu/';
import HeaderNav from '../components/HeaderNav/';

function App() {
  return (
    <LocaleProvider locale={zhCN}>
      <div className={styles.layout}>
        <div className={styles.sider}>
          <SiderMenu />
        </div>
        <div className={styles.right}>
          <HeaderNav />
          <div className={styles.content}>
            <div className={styles.main}></div>
          </div>
        </div>
      </div>
    </LocaleProvider>
  )
}

export default withRouter(connect(data => data.app)(App));;