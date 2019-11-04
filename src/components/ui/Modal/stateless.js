import React from 'react';
import { Modal, ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import BasicButton from '../../inputs/BasicButton';
import { STYLE_LEVEL } from '../../../styles';
import { MODAL_TYPES } from './types';

const renderModal = ({ ...props }) => {
  const { type } = props;
  switch (type) {
    case MODAL_TYPES.DIALOG:
    default:
      return renderDialog(props);
  }
}
renderModal.propTypes = {
  type: PropTypes.string.isRequired
}

const renderDialog = ({ ...props }) => {
  const { data: { title, text, onSubmit, onClose }, onModalClose } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        {title && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}

        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>

        <View style={styles.footer}>

          <View style={styles.button}>
            {onSubmit && <BasicButton
              caption={'Submit'}
              onPress={() => { onModalClose(onSubmit); }}
            />}
          </View>

          <View style={styles.button}>
            {onClose && <BasicButton
              caption={'Close'}
              onPress={() => { onModalClose(onClose); }}
              flavour={STYLE_LEVEL.DANGER}
            />}
          </View>

        </View>

      </View>
    </View>
  )
}
renderDialog.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
  }).isRequired,
  onModalClose: PropTypes.func.isRequired,
}

const SuperModal = ({ ...props }) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={props.visible}
  >
    {props.visible && <ScrollView
      style={styles.superModalContainer}
      bounces={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.superModalContent}
    >
      {renderModal({ ...props })}
    </ScrollView>}
  </Modal>
)

SuperModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default SuperModal;
