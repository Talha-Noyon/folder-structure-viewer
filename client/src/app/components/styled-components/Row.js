
import styled from "styled-components";
const Row = styled.div`
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
display: flex;
flex-wrap: wrap;
margin-top: calc(var(--bs-gutter-y) * -1);
margin-right: calc(var(--bs-gutter-x) / -2);
margin-left: calc(var(--bs-gutter-x) / -2);
  >  * {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) / 2);
    padding-left: calc(var(--bs-gutter-x) / 2);
    margin-top: var(--bs-gutter-y);
  }
`;
export default Row;