import * as fs from 'fs';
import * as path from 'path';
import * as tls from 'tls';

export function createSSLContext(): tls.SecureContext {
    const options: tls.SecureContextOptions = {
        minVersion: 'TLSv1',
        maxVersion: 'TLSv1',
        cert: fs.readFileSync(path.resolve(__dirname, 'path/to/your/cert.pem')),
        key: fs.readFileSync(path.resolve(__dirname, 'path/to/your/key.pem')),
        ca: fs.readFileSync(path.resolve(__dirname, 'path/to/your/ca.pem')),
    };

    return tls.createSecureContext(options);
}