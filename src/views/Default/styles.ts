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

export const Header = styled.header`
  position: relative;
  padding: 30px 0 40px;
  margin-bottom: 0px;

  > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    > span {
      &:first-of-type {
        font-size: ${({ theme }) => theme.typography.size.h1};
      }

      &:last-of-type {
        font-size: ${({ theme }) => theme.typography.size.p};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        color: ${({ theme }) => theme.colors.gray._300};
      }
    }

    hr {
      width: 100px;
      border: 0;
      margin: 16px auto;
      border-top: 2px solid ${({ theme }) => theme.colors.gray._200};
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top: 16px solid ${({ theme }) => theme.colors.gray._200};
    border-left-width: 260px;
    border-right-width: 0;
    transform: translateY(100%);
  }
`;

export const SocialLinks = styled.section`
  display: flex;
  flex-direction: column;

  > a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.typography.size.caption};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray._200};
    margin: 0 16px 16px;

    span {
      &:first-of-type {
        position: relative;
        top: 2px;
        padding: 6px;
        padding-left: 0;
        border-right: 1px solid ${({ theme }) => theme.colors.gray._200};
      }

      &:last-of-type {
        padding-left: 12px;
      }
    }
  }
`;

export const Skills = styled.section`
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

export const Languages = styled.section`
  padding: 40px 16px 20px;

  > h2 {
    text-transform: uppercase;
    text-align: center;
  }

  > ul {
    padding: 10px 0;

    > li {
      display: flex;
      align-items: center;
      padding: 8px 0;

      > img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
`;

export const About = styled.section`
  display: flex;
  align-items: center;
  padding: 40px 16px;

  > img {
    width: 62px;
    height: 62px;
    margin-right: 12px;
  }

  > p {
    line-height: ${({ theme }) => theme.typography.lineHeight._100};
  }
`;

export const Main = styled.section`
  position: relative;
  top: -50px;
  margin: 0 16px 0 30px;
  height: 100%;
  padding-left: 30px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray._200};

  > h2 {
    margin-top: 50px;
    position: relative;
    color: ${({ theme }) => theme.colors.gray._200};
    font-size: ${({ theme }) => theme.typography.size.h2};
    font-weight: ${({ theme }) => theme.typography.weight.black};
    text-transform: uppercase;
    text-align: center;
    transform: translateY(-50%);

    hr {
      position: absolute;
      border: 0;
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
      border-top: 1px solid ${({ theme }) => theme.colors.gray._200};
      width: 100px;
    }
  }

  > h3 {
    position: relative;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;

    span {
      display: block;
      background-color: ${({ theme }) => theme.colors.gray._000};
      border: 1px solid ${({ theme }) => theme.colors.primary._100};
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: -30px;
      width: 10px;
      height: 10px;
    }
  }

  > h4 {
    position: relative;
    margin-top: 12px;
    font-size: ${({ theme }) => theme.typography.size.caption};
    text-transform: uppercase;

    hr {
      position: absolute;
      border: 0;
      top: 50%;
      left: -30px;
      transform: translateY(-50%);
      border-top: 1px solid ${({ theme }) => theme.colors.gray._200};
      width: 20px;
    }
  }

  > ul {
    margin-bottom: 20px;

    > li {
      position: relative;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.gray._300};

      span {
        position: absolute;
        top: 8px;
        left: -15px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.gray._200};
      }
    }
  }
`;

export const Education = styled.section``;
