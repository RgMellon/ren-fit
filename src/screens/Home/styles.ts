import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 20px;
  `}
`;

export const ContentCard = styled.View`
  width: 48%;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
