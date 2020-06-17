import styled, { keyframes } from "styled-components";

// const shake = keyframes`
//   0% { transform: translate(1px, 1px) rotate(0deg); }
//   10% { transform: translate(-1px, -2px) rotate(-1deg); }
//   20% { transform: translate(-3px, 0px) rotate(1deg); }
//   30% { transform: translate(3px, 2px) rotate(0deg); }
//   40% { transform: translate(1px, -1px) rotate(1deg); }
//   50% { transform: translate(-1px, 2px) rotate(-1deg); }
//   60% { transform: translate(-3px, 1px) rotate(0deg); }
//   70% { transform: translate(3px, 1px) rotate(-1deg); }
//   80% { transform: translate(-1px, -1px) rotate(1deg); }
//   90% { transform: translate(1px, 2px) rotate(0deg); }
//   100% { transform: translate(1px, -2px) rotate(-1deg); }
// `;

// const shake = keyframes`
//   0% { transform: translate(0.5px, 0.5px) rotate(0deg); }
//   10% { transform: translate(-px, -2px) rotate(-1deg); }
//   20% { transform: translate(-3px, 0px) rotate(1deg); }
//   30% { transform: translate(3px, 2px) rotate(0deg); }
//   40% { transform: translate(1px, -1px) rotate(1deg); }
//   50% { transform: translate(-1px, 2px) rotate(-1deg); }
//   60% { transform: translate(-3px, 1px) rotate(0deg); }
//   70% { transform: translate(3px, 1px) rotate(-1deg); }
//   80% { transform: translate(-1px, -1px) rotate(1deg); }
//   90% { transform: translate(1px, 2px) rotate(0deg); }
//   100% { transform: translate(1px, -2px) rotate(-1deg); }
// `;

export const Wrapper = styled.div`
  padding-top: 50px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  position: absolute;
  top: -50px;
`;
/* animation: ${shake} 0.5s infinite; */
export const NavItem = styled.span`
  padding: 10px;
  margin-bottom: 6%;
  font-weight: 600;
  text-decoration: none;
  :hover {
    background-color: rgba(180, 179, 179, 0.3);
    border-radius: 5px;
  }
`;
