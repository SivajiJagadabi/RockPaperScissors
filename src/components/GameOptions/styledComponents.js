import styled from 'styled-components'

export const ListOptions = styled.li`
  display: felx;
`

export const OptionButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`

export const OptionImage = styled.img`
  width: 180px;
  height: 180px;
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`
