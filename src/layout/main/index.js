import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MainLayout = ({ children }) => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  </Fragment>
);

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;
