import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledHeader>MY TODO-LIST</StyledHeader>
    </div>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: lightpink;
  display: flex;
  justify-content: space-between;
`;
