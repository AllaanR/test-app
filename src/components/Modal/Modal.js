import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import {
  ModalInnerContainer,
  ButtonContainer,
  ChildrenContainer,
  InnerComponentContainer,
  ModalLeftButton,
  ModalRightButton,
  ModalText,
  ModalTitle
} from './Modal.styles'

const CustomModal = props => (
  <Modal {...props} avoidKeyboard>
    <ModalInnerContainer>
      {props.title ? <ModalTitle>{props.title}</ModalTitle> : null}
      {props.text ? <ModalText>{props.text}</ModalText> : null}
      <ChildrenContainer>{props.children}</ChildrenContainer>
      <InnerComponentContainer>{props.innerComponent}</InnerComponentContainer>
      <ButtonContainer>
        {props.cancelButtonText && (
          <ModalLeftButton onPress={props.cancelButtonOnPress} secondary>
            {props.cancelButtonText}
          </ModalLeftButton>
        )}
        {props.acceptButtonText && (
          <ModalRightButton onPress={props.acceptButtonOnPress} primary>
            {props.acceptButtonText}
          </ModalRightButton>
        )}
      </ButtonContainer>
    </ModalInnerContainer>
  </Modal>
)

CustomModal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
  innerComponent: PropTypes.element,
  cancelButtonText: PropTypes.string,
  cancelButtonOnPress: PropTypes.func,
  acceptButtonText: PropTypes.string,
  acceptButtonOnPress: PropTypes.func
}

export default CustomModal
