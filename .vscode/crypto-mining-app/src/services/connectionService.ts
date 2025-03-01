import { createSecureContext } from 'tls';
import { Socket } from 'net';
import { Node } from '../models/node';

export class ConnectionService {
    private nodes: Node[];

    constructor() {
        this.nodes = [];
    }

    public addNode(address: string): void {
        const node = new Node(address);
        this.nodes.push(node);
    }

    public connectToNode(node: Node): Promise<Socket> {
        return new Promise((resolve, reject) => {
            const sslContext = this.createSSLContext();
            const socket = new Socket();

            socket.connect(node.port, node.address, () => {
                socket.write('Hello Node');
                resolve(socket);
            });

            socket.on('error', (error) => {
                reject(error);
            });

            socket.pipe(sslContext);
        });
    }

    private createSSLContext() {
        return createSecureContext({
            minVersion: 'TLSv1',
            // Additional SSL options can be configured here
        });
    }

    public getNodes(): Node[] {
        return this.nodes;
    }
}