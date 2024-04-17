import { Disposable } from 'vscode-jsonrpc';
import { Duplex } from 'stream';

class WStream {
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

    public write(data: Uint8Array | string, encoding?: 'ascii' | 'utf-8'): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            console.log(`writing data ${Buffer.from(data).toString()}`);
            this.duplex.write(data, encoding, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    public end(): void {
        this.duplex.end();
    }
}

export { WStream };
