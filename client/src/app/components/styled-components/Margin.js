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
    return `margin-right: auto !important; margin-left: auto !important;`
  } else if (axis === 'x') {
    return `margin-right: ${spacers[value] / spacer}rem !important; margin-left: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'y') {
    return `margin-top: ${spacers[value] / spacer}em !important; margin-bottom: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 't') {
    return `margin-top: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'b') {
    return `margin-bottom: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'l') {
    return `margin-left: ${spacers[value] / spacer}rem !important;`
  } else if (axis === 'r') {
    return `margin-right: ${spacers[value] / spacer}rem !important;`
  };
}
const Margin = styled.div`
  ${({ axis, value }) => getMarginString(axis, value)};
`;
export default Margin;
