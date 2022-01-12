require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remember evil hover process obscure sweet'; 
let testAccounts = [
"0xbed50ee874abadff3036039c4d4c7af09276ca9b0015f10a12f1b28e6686092d",
"0xcb490c993b9073023d889347318ebf47bc45a485dd0055902013a3bc23f4fae5",
"0x22b9d9b75047588a5fb7ea4fb86ef7d660ef9577516d8e270310026658a26d3f",
"0xe5018decb582d641a6c0d9827689413184dcd8cec615c27a9ab008a165e3cdf8",
"0xd938b1a532ee4e4f157eca4f7c63919e11e8108164da58b88d150014677578df",
"0x2019737f12f001426117a43be425324c64b81249c31acd2f0eb266499bbbc69d",
"0x2dc78e35c1e0a64d15b79cfb725e1a4677883520b3253c75f01362863ba8452b",
"0x9f6457a5d25914e53989d07ef311001fad8c38688457e72b60f4f645315ebb41",
"0x5ad55d20758740657a3d0566ca90fc3c726a17fefab53feaf609f8b340908094",
"0x5961c640148de357a255fb87165382c684751e0e4a2cf5e1d5430e02cbaab398"
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

