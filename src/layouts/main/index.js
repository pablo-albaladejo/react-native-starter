import React, { Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import Modal from '../../components/ui/Modal';
import Toast from '../../components/ui/Toast';
import Loading from '../../components/ui/Loading';

import PropTypes from 'prop-types';
import styles from './styles';


const MainLayout = ({ children }) => (
  <Fragment>
    <StatusBar />
    <SafeAreaView
      style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.content}
      >
        {children}
      </ScrollView>
      <Modal />
      <Toast />
      <Loading />
    </SafeAreaView>
  </Fragment >
);

MainLayout.propTypes = {
  children: PropTypes.node,
}

export default MainLayout;
