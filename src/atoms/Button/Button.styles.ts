import styled, { css } from 'styled-components'

export const Container = styled.button(
  ({ theme }) => css`
    color: ${theme.colors.buttonText};
    padding: 10px 20px;
    font-size: 20px;
    text-transform: uppercase;

    border: 0;
    border-radius: 4px;
    transition: background 1s;

    background: ${theme.colors.primary}
      radial-gradient(circle, transparent 1%, ${theme.colors.primary} 1%)
      center/15000%;

    &:hover {
      background: ${theme.colors.primaryLight}
        radial-gradient(circle, transparent 1%, ${theme.colors.primary} 1%)
        center/15000%;
      cursor: pointer;
    }

    &:active {
      background-color: ${theme.colors.primaryDark};
      background-size: 100%;
      transition: background 0s;
    }
  `
)
