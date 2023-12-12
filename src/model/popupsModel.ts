import { action, type Action } from 'easy-peasy'

import type {
    IAlert,
    IAuctionOperation,
    IOperation,
    IWaitingPayload,
    LoadingPayload,
} from '~/types'
import { ActionState } from '~/utils'

export interface PopupsModel {
    isSettingsModalOpen: boolean
    isConnectModalOpen: boolean
    isConnectedWalletModalOpen: boolean
    isConnectorsWalletOpen: boolean
    isLiquidateVaultModalOpen: boolean
    isVaultManagerOpen: boolean
    isClaimPopupOpen: boolean
    returnProxyFunction: (actions: any) => void | null
    blockBackdrop: boolean
    hasFLXClaim: boolean
    isProxyModalOpen: boolean
    isScreenModalOpen: boolean
    isVotingModalOpen: boolean
    auctionOperationPayload: IAuctionOperation
    liquidateVaultPayload: { vaultId: string } | null
    alertPayload: IAlert | null
    ESMOperationPayload: IOperation
    vaultOperationPayload: IOperation & { isCreate: boolean }
    isLoadingModalOpen: LoadingPayload
    isWaitingModalOpen: boolean
    waitingPayload: IWaitingPayload
    setIsSettingModalOpen: Action<PopupsModel, boolean>
    setIsConnectModalOpen: Action<PopupsModel, boolean>
    setIsConnectedWalletModalOpen: Action<PopupsModel, boolean>
    setIsScreenModalOpen: Action<PopupsModel, boolean>
    setIsConnectorsWalletOpen: Action<PopupsModel, boolean>
    setIsLoadingModalOpen: Action<PopupsModel, LoadingPayload>
    setVaultOperationPayload: Action<PopupsModel, IOperation & { isCreate: boolean }>
    setAlertPayload: Action<PopupsModel, IAlert | null>
    setESMOperationPayload: Action<PopupsModel, IOperation>
    setIsVotingModalOpen: Action<PopupsModel, boolean>
    openLiquidateVaultModal: Action<PopupsModel, { vaultId: string }>
    closeLiquidateVaultModal: Action<PopupsModel>
    setAuctionOperationPayload: Action<PopupsModel, IAuctionOperation>
    setIsWaitingModalOpen: Action<PopupsModel, boolean>
    setWaitingPayload: Action<PopupsModel, IWaitingPayload>
    setBlockBackdrop: Action<PopupsModel, boolean>
    setIsProxyModalOpen: Action<PopupsModel, boolean>
    setIsVaultManagerOpen: Action<PopupsModel, boolean>
    setIsClaimPopupOpen: Action<PopupsModel, boolean>
    setHasFLXClaim: Action<PopupsModel, boolean>
    setReturnProxyFunction: Action<PopupsModel, (storeActions: any) => void | null>
}

const popupsModel: PopupsModel = {
    blockBackdrop: false,
    isSettingsModalOpen: false,
    isConnectModalOpen: false,
    isLiquidateVaultModalOpen: false,
    isProxyModalOpen: false,
    hasFLXClaim: false,
    isConnectedWalletModalOpen: false,
    isScreenModalOpen: false,
    isWaitingModalOpen: false,
    isVaultManagerOpen: false,
    isClaimPopupOpen: false,
    liquidateVaultPayload: null,
    returnProxyFunction: () => {},
    waitingPayload: {
        title: '',
        text: '',
        hint: '',
        status: ActionState.NONE,
        isCreate: false,
    },
    vaultOperationPayload: {
        isOpen: false,
        type: '',
        isCreate: false,
    },
    alertPayload: {
        type: '',
        text: '',
    },
    ESMOperationPayload: {
        isOpen: false,
        type: '',
    },
    isVotingModalOpen: false,
    isConnectorsWalletOpen: false,
    isLoadingModalOpen: {
        isOpen: false,
        text: '',
    },
    auctionOperationPayload: {
        isOpen: false,
        type: '',
        auctionType: '',
    },

    setIsSettingModalOpen: action((state, payload) => {
        state.isSettingsModalOpen = payload
    }),
    setIsConnectModalOpen: action((state, payload) => {
        state.isConnectModalOpen = payload
    }),
    setIsConnectedWalletModalOpen: action((state, payload) => {
        state.isConnectedWalletModalOpen = payload
    }),
    openLiquidateVaultModal: action((state, payload) => {
        state.isLiquidateVaultModalOpen = true
        state.liquidateVaultPayload = payload
    }),
    closeLiquidateVaultModal: action((state) => {
        state.isLiquidateVaultModalOpen = false
        state.liquidateVaultPayload = null
    }),
    setIsScreenModalOpen: action((state, payload) => {
        state.isScreenModalOpen = payload
    }),
    setIsConnectorsWalletOpen: action((state, payload) => {
        state.isConnectorsWalletOpen = payload
    }),
    setIsLoadingModalOpen: action((state, payload) => {
        state.isLoadingModalOpen = payload
    }),
    setVaultOperationPayload: action((state, payload) => {
        state.vaultOperationPayload = payload
    }),
    setAlertPayload: action((state, payload) => {
        state.alertPayload = payload
    }),
    setESMOperationPayload: action((state, payload) => {
        state.ESMOperationPayload = payload
    }),
    setIsVotingModalOpen: action((state, payload) => {
        state.isVotingModalOpen = payload
    }),
    setAuctionOperationPayload: action((state, payload) => {
        state.auctionOperationPayload = payload
    }),
    setIsWaitingModalOpen: action((state, payload) => {
        state.isWaitingModalOpen = payload
        if (!payload) {
            state.waitingPayload = {
                title: '',
                text: '',
                hint: '',
                status: ActionState.NONE,
                isCreate: false,
            }
        }
    }),
    setWaitingPayload: action((state, payload) => {
        state.waitingPayload = payload
    }),
    setBlockBackdrop: action((state, payload) => {
        state.blockBackdrop = payload
    }),
    setIsProxyModalOpen: action((state, payload) => {
        state.isProxyModalOpen = payload
    }),
    setReturnProxyFunction: action((state, payload) => {
        state.returnProxyFunction = payload
    }),
    setIsVaultManagerOpen: action((state, payload) => {
        state.isVaultManagerOpen = payload
    }),
    setIsClaimPopupOpen: action((state, payload) => {
        state.isClaimPopupOpen = payload
    }),
    setHasFLXClaim: action((state, payload) => {
        state.hasFLXClaim = payload
    }),
}

export default popupsModel
