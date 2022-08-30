import styled from 'styled-components'

export const Hr = styled.hr`
  border-color: grey;
  margin-bottom: ${({ theme }) => theme.space.small};
  width: 100%;
`

export const StyledPrevisionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.medium};
  height: 25rem;
  width: 12rem;
  margin-top: ${({ theme }) => theme.space.small};
  margin-right: ${({ theme }) => theme.space.small};
  padding: ${({ theme }) => theme.space.small};
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: ${({ theme }) => theme.radius.large};
  }
`
