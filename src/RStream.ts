import { Disposable, Duplex } from 'vscode-jsonrpc';

class RStream {
    public constructor(private duplex: Duplex) {
    }

    public onData(listener: (data: Uint8Array) => void): Disposable {
        this.duplex.on('data', listener);
        return Disposable.create(() => this.duplex.off('data', listener));

    }

    public onClose(listener: () => void): Disposable {
        this.duplex.on('close', listener);
        return Disposable.create(() => this.duplex.off('close', listener));

    }

    public onError(listener: (error: any) => void): Disposable {
        this.duplex.on('error', listener);
        return Disposable.create(() => this.duplex.off('error', listener));
    }

    public onEnd(listener: () => void): Disposable {
        this.duplex.on('end', listener);
        return Disposable.create(() => this.duplex.off('end', listener));
    }
}

export { RStream };
