import { Keypair } from "@solana/web3.js";

function checkPrefix(keypair, prefixes) {
  const publicKey = keypair.publicKey.toBase58();
  return prefixes.some((prefix) => publicKey.startsWith(prefix));
}

function findKeyWithPrefix(prefixes) {
  let keypair;
  let attempt = 0;
  do {
    keypair = Keypair.generate();
    attempt++;
    console.log(
      `Attempt ${attempt}: Current public key: ${keypair.publicKey.toBase58()}`
    );
  } while (!checkPrefix(keypair, prefixes));

  console.log(`✅ Found matching key after ${attempt} attempts!`);
  return keypair;
}

const prefixes = [
  "Oleg",
  "oLeg",
  "oleG",
  "0leg",
  "0leq",
  "oleq",
  "oleg",
  "anza",
  "anZa",
];

const keypair = findKeyWithPrefix(prefixes);

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);
