import styled from "styled-components";
function getWidthString(span) {
  if(!span) return;

  let width = span / 12 * 100;
  return `flex: 0 0 auto; width: ${width}%!important`;
}
const Col = styled.div`
  ${({xs}) => (xs ? getWidthString(xs) : "flex: 1 0 0%;")};

  @media only screen and (min-width: 576px) {
    ${({sm}) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 768px) {
    ${({md}) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 992px) {
    ${({lg}) => lg && getWidthString(lg)};
  }
  
  @media only screen and (min-width: 1200px) {
    ${({xl}) => xl && getWidthString(xl)};
  }
  
  @media only screen and (min-width: 1400px) {
    ${({xxl}) => xxl && getWidthString(xxl)};
  }
`;
export default Col;