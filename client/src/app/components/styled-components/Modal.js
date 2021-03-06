
import styled from "styled-components";
const Modal = styled.div`
  z-index: 9;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
  > div {
    width: 500px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: translateY(-200px);
  }
`;
export default Modal;