export const INR_CNTR = "incr_cntr";
export const DCR_CNTR = "dcr_cntr";
let cntr = 0;
export function incrCounter(text) {
  return {
    type: INR_CNTR,
    payload: 1
  };
}

export function dcrCounter(text) {
  return {
    type: DCR_CNTR,
    payload: 1
  };
}
