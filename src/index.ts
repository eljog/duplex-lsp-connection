import { createProtocolConnection } from 'vscode-languageserver-protocol';
import { Duplex } from 'stream';
import { ReadableStreamMessageReader, WriteableStreamMessageWriter } from 'vscode-jsonrpc';
import { RStream } from './RStream';
import { WStream } from './WStream';

export function createProtocolConnectionFromDuplex(duplex: Duplex) {
    const rs = new ReadableStreamMessageReader(new RStream(duplex));
    const ws = new WriteableStreamMessageWriter(new WStream(duplex));

    const connection = createProtocolConnection(
        rs,
        ws
    );
    return connection;
}

export { DLCSettings, overrideSettings, getSettings } from './settings';
