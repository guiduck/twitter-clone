import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span{
    font-size: 14px;
    color: var(--gray);
    font-weight: 300;
  }

  > strong{
    margin-top: 3px;
    font-size: 14px;
    font-weight: bold;
  }
`;
