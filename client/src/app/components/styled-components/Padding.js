import styled from "styled-components";
let spacer = 16;//'1rem !default';
let spacers = {
  0: 0,
  1: spacer / 4,
  2: spacer / 2,
  3: spacer,
  4: spacer * 1.5,
  5: spacer * 3,
}
function getMarginString(axis, value) {
  if (!axis) return;
  if (axis === 'auto') {
    return `padding-right: auto !important; padding-left: auto !important;`
  } else if (axis === 'x') {
    return `padding-right: ${spacers[value] / spacer}rem !important; padding-left: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'y') {
    return `padding-top: ${spacers[value] / spacer}em !important; padding-bottom: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 't') {
    return `padding-top: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'b') {
    return `padding-bottom: ${spacers[value] / spacer}rem !important;`
  };
}
const Padding = styled.div`
  ${({ axis, value }) => getMarginString(axis, value)};
`;
export default Padding;