# Cryptocurrency Mining Application

This project is a cryptocurrency mining application that connects to mining nodes and integrates with Bitcoin and other cryptocurrency wallets. It supports both IPv4 and IPv6 addresses and implements SSL/TLS 1.0 for secure connections.

## Features

- Connects to mining nodes using IPv4 and IPv6 addresses.
- Implements SSL/TLS 1.0 for secure communication.
- Integrates with Bitcoin and other cryptocurrency wallets.
- Provides a RESTful API for managing wallet operations and node connections.

## Project Structure

```
crypto-mining-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── config
│   │   └── ssl.ts           # SSL/TLS configuration
│   ├── controllers
│   │   └── walletController.ts # Manages wallet-related operations
│   ├── models
│   │   └── node.ts          # Defines the Node model
│   ├── routes
│   │   └── index.ts         # API routes definition
│   ├── services
│   │   ├── connectionService.ts # Manages connections to mining nodes
│   │   └── walletService.ts  # Handles interactions with wallets
│   └── types
│       └── index.ts         # Type definitions
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd crypto-mining-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

## API Endpoints

- **Connect to Node**: Connects to a specified mining node.
- **Wallet Operations**: Manage cryptocurrency wallets, including sending and receiving transactions.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.