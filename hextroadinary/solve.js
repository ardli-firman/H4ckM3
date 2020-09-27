const data = "0xc4115 0x4cf8";

const hex = data.split(" ");
// ROXy XOR operation
const flag = (hex[0] ^ hex[1]).toString(16);
console.log("0x" + flag);
