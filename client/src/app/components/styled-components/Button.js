
import styled from "styled-components";
const Button = styled.div`
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid #eee;
padding: 0.375rem 0.75rem;
margin: 0 0.15rem;
font-size: 1rem;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
&:hover {
  color: #212529;
}
&:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
&:active,
&.active {
  box-shadow: inset 0 3px 5px rgba($black, .125) !default;
}

&:disabled,
&.disabled,
fieldset:disabled & {
  pointer-events: none;
  opacity: 0.65;
}
`;
export default Button;