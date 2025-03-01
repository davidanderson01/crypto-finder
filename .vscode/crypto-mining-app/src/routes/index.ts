import { Router } from 'express';
import WalletController from '../controllers/walletController';

const router = Router();
const walletController = new WalletController();

export function setRoutes(app) {
    app.use('/api/wallet', router);

    router.post('/connect', walletController.connectWallet.bind(walletController));
    router.get('/balance', walletController.getBalance.bind(walletController));
    router.post('/send', walletController.sendTransaction.bind(walletController));
}