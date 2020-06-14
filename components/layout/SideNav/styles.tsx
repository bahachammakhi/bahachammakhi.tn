import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

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
