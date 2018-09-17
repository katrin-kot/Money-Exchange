// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }
  const H = Math.floor(currency / 50);
  const Q = Math.floor((currency - H * 50) / 25);
  const D = Math.floor((currency - H * 50 - Q * 25) / 10);
  const N = Math.floor((currency - H * 50 - Q * 25 - D * 10) / 5);
  const P = currency - H * 50 - Q * 25 - D * 10 - N * 5;
  const result = {};
  if (H > 0) {
    result.H = H;
  }
  if (Q > 0) {
    result.Q = Q;
  }
  if (D > 0) {
    result.D = D;
  }
  if (N > 0) {
    result.N = N;
  }
  if (P > 0) {
    result.P = P;
  }
  return result;
};
