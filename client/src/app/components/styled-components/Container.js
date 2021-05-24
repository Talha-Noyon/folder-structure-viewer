import styled from "styled-components";
let containerMaxWidths = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  xxl: "1320px"
};
function getWidthString(breakpoint) {
  if(!breakpoint) return;
  return `max-width: ${containerMaxWidths[breakpoint]}`;
}
const Container = styled.div`
  ${({xs}) => (xs ? getWidthString(xs) : `
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;`)};

  @media (min-width: 576px) {
    ${({breakpoint}) => breakpoint === `sm` && getWidthString(breakpoint)};
  }
  @media (min-width: 768px) {
    ${({breakpoint}) => breakpoint === `md` && getWidthString(breakpoint)};
  }
  @media (min-width: 992px) {
    ${({breakpoint}) => breakpoint === `lg` && getWidthString(breakpoint)};
  }
  @media (min-width: 1200px) {
    ${({breakpoint}) => breakpoint === `x1` && getWidthString(breakpoint)};
  }
  @media (min-width: 1400px) {
    ${({breakpoint}) => breakpoint === `xx1` && getWidthString(breakpoint)};
  }
`;
export default Container;