/*Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/
function binaryAgent(str) {
    const elements = str.split(" ");
    let words = elements.map(function (elem){
      let decimal = 0;
      for (let i=elem.length; i>0; i--){
        decimal += elem[i-1](2*(elem.length-i));
      };
      return decimal;
    });
  return words.map(code=>String.fromCharCode(code)).join("");
};
//Tests
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
