import styled from 'styled-components';

import { hexTransparency } from '~/helpers';

export const Container = styled.main`
  max-width: 794px;
  height: 1122px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.gray._100};
  display: flex;

  > aside {
    padding: 16px 0;
    width: 260px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > article {
    position: relative;
    overflow: hidden;
    z-index: 2;
    flex: 1;
    margin: 16px;
    margin-left: 0;
    background-color: ${({ theme }) => theme.colors.gray._000};
    box-shadow: 0px 4px 10px
      ${({ theme }) => hexTransparency(theme.colors.gray._400, 0.05)};
  }
`;

export const Education = styled.section``;
