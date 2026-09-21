import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * MicroBit More extension
 */

import pcratchIoTIconURL from './entry-icon.png';
import pcratchIoTInsetIconURL from './inset-icon.svg';
import pcratchIoTConnectionIconURL from './connection-icon.svg';
import pcratchIoTConnectionSmallIconURL from './connection-small-icon.svg';

const version = 'v0.2.2';
const translations =
{
    "en": {
        "pcratchIoT.entry.name": "Network Extension",
        "pcratchIoT.entry.description": `Network Extension (${version})`
    },
    "ja": {
        "pcratchIoT.entry.name": "ネットワーク拡張",
        "pcratchIoT.entry.description": `ネットワーク拡張 (${version})`
    },
    "ja-Hira": {
        "pcratchIoT.entry.name": "ネットワークかくちょう",
        "pcratchIoT.entry.description": `ネットワークかくちょう (${version})`
    }
};

const entry = {
    name: (
        <FormattedMessage
            defaultMessage="Websock 拡張"
            description="name of the extension"
            id="websockExt.entry.name"
        />
    ),
    extensionId: 'websockExt',
    extensionURL: 'https://kitaratch.github.io/websock-ext/dist/websockExt.mjs',
    collaborator: 'Programming Education Lab',
    iconURL: pcratchIoTIconURL,
    insetIconURL: pcratchIoTInsetIconURL,
    description: (
        <FormattedMessage
            defaultMessage='WebSocket でネットワーク通信をします'
            description="escription for this extension"
            id="websockExt.entry.description"
        />
    ),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    helpLink: 'https://kitaratch.github.io/',
    translationMap: translations
};

export {entry}; // loadable-extension needs this line.
export default entry;
