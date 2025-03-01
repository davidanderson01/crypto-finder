export interface NodeAddress {
    ip: string; // Supports both IPv4 and IPv6
    port: number;
}

export interface WalletInfo {
    address: string;
    balance: number;
    transactions: Array<string>;
}