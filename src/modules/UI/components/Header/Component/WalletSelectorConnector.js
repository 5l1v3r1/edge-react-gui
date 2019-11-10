// @flow

import { connect } from 'react-redux'

import type { Dispatch, State } from '../../../../../types/reduxTypes.js'
import * as UI_SELECTORS from '../../../selectors'
import type { DispatchProps, StateProps } from './WalletSelector.ui'
import WalletSelector from './WalletSelector.ui'

const mapStateToProps = (state: State): StateProps => {
  const selectedWallet = UI_SELECTORS.getSelectedWallet(state)
  const selectedWalletCurrencyCode = UI_SELECTORS.getSelectedCurrencyCode(state)
  return {
    selectedWalletName: selectedWallet ? selectedWallet.name : null,
    selectedWalletCurrencyCode
  }
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPress: () => {
    dispatch({ type: 'TOGGLE_WALLET_LIST_MODAL_VISIBILITY' })
    dispatch({ type: 'TOGGLE_SCAN_TO_WALLET_LIST_MODAL' })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WalletSelector)
