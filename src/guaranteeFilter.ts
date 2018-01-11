export default guaranteeFilter;

function guaranteeFilter() {
  return function(value) {
    return value.substring(1, 4);
  };
}
