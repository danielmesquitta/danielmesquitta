import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  top: -50px;
  margin: 0 16px 0 30px;
  height: 100%;
  padding-left: 30px;
  border-left: 1px solid ${({ theme }) => theme.colors.gray._200};
`;

export default Container;
