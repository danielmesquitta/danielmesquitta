import styled from 'styled-components';

import { hexTransparency } from '~/helpers';

const Container = styled.section`
  position: relative;
  padding: 20px 16px 0;
  background-color: ${({ theme }) => theme.colors.primary._100};

  h2,
  h3,
  p {
    color: ${({ theme }) => theme.colors.gray._000};
  }

  > h2 {
    font-weight: ${({ theme }) => theme.typography.weight.black};
    text-align: center;
    text-transform: uppercase;
  }

  > div {
    padding: 20px 0;

    > h3 {
      font-weight: ${({ theme }) => theme.typography.weight.bold};
      margin-bottom: 4px;
    }

    > p {
      line-height: ${({ theme }) => theme.typography.lineHeight._100};
    }
  }

  > hr {
    width: 100px;
    margin: auto;
    border: 0;
    border-bottom: 1px solid
      ${({ theme }) => hexTransparency(theme.colors.gray._000, 0.3)};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top: 24px solid ${({ theme }) => theme.colors.primary._100};
    border-left-width: 0;
    border-right-width: 280px;
    transform: translateY(100%);
  }
`;

export default Container;
