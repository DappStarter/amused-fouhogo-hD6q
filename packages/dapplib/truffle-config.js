require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rebel saddle public hunt derive slot gift'; 
let testAccounts = [
"0xcb8af1fb54000eca8e66214aff0d4e9de7a1d12cd5f2fd03573dcd3813cf088f",
"0xbeeffe95f3360fe446aa1fa966870b4f40f7de3292297ff2eaf4cecc4a93a3cd",
"0xf0d96c87bd5f59cba216b7a71630d9560d86a853c40929917457e0d25cfc9ed0",
"0xf9c9c5e30ff3dc122a0aed09a9b2e5a840cb4ea4be4a8cc5c4e55e2183852680",
"0x782dee39c205cdc06819259d9807b8804db06fd74b9fe7c1ddff3b8d5f474766",
"0x507511839d3fd1968b6c541e4941a86412b842b4fbf1e94051ed4c93870d075f",
"0xa06d0190fca663c0cd9b85b4361ffe67ad051ef412b8ae2679ed67e86f67918e",
"0x1d1c4d1cd00c4de4d8bbe0986f7abd1a076b8e00a52c77084f521e95d0408cc8",
"0xec2ca1de9495c35fdd09f3db7d69b1cdb517400bfc73001c32e2a3925dda8ca3",
"0x06e428ba8e76d529f23faad2627f1114c79dd16dc4786d5f917efd764a4cd5cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

