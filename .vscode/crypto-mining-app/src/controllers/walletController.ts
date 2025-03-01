import { Request, Response } from 'express';
import { WalletService } from '../services/walletService';

export class WalletController {
    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    public async connectToBitcoinWallet(req: Request, res: Response): Promise<void> {
        try {
            const walletInfo = await this.walletService.connectToBitcoinWallet(req.body);
            res.status(200).json(walletInfo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async connectToOtherWallet(req: Request, res: Response): Promise<void> {
        try {
            const walletInfo = await this.walletService.connectToOtherWallet(req.body);
            res.status(200).json(walletInfo);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getWalletBalance(req: Request, res: Response): Promise<void> {
        try {
            const balance = await this.walletService.getWalletBalance(req.params.walletId);
            res.status(200).json({ balance });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async sendTransaction(req: Request, res: Response): Promise<void> {
        try {
            const transactionResult = await this.walletService.sendTransaction(req.body);
            res.status(200).json(transactionResult);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}