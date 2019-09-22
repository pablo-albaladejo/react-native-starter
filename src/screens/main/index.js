import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './styles';
import MainLayout from '../../layout/main';

const App = () => (
  <MainLayout>
    <Header />
    {global.HermesInternal == null ? null : (
      <View style={styles.engine}>
        <Text style={styles.footer}>Engine: Hermes</Text>
      </View>
    )}
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Step One</Text>
        <Text style={styles.sectionDescription}>
          Edit
              <Text style={styles.highlight}>App.js</Text>
          to change this screen and then come back to see your edits.
            </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}> Read the docs to discover what to do next:</Text>
      </View>
      <LearnMoreLinks />
    </View>
  </MainLayout>
);

export default App;
