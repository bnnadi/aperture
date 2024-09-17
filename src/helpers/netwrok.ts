import React from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

export declare type FlashMessageType = 'success' | 'danger' | 'info' | 'warning' | 'default';
export type Position = "top" | "bottom" | "center" | { top?: number; left?: number; bottom?: number; right?: number };

export declare type FlashMessageProps = {
	displayMessage: (params: DisplayFunction) => void;
};
export declare type DisplayFunction = {
	text: string;
	type: FlashMessageType;
	description?: string;
	position?: Position;
	showClose?: boolean;
	navigateTo?: () => void;
};

export const checkNetwork = (context: FlashMessageProps, message?: string) => {
	NetInfo.fetch().then(networkState => {
		if (networkState.isConnected === false && networkState.isInternetReachable === false) {
			const text = message ?? 'Network connection lost.';
			context.displayMessage({ text, type: 'info' });
		}
	});
};

export const hasNetwork = () =>
	NetInfo.fetch()
		.then(networkState => !(networkState.isConnected === false && networkState.isInternetReachable === false))
		.then(network => network);

export { useNetInfo, NetInfo };