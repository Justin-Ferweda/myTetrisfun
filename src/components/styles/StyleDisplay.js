import styled from 'styled-components'

export const StyleDisplay = styled.div`

    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${prop => (prop.gameOver ? 'red' : '#999')};
    background: #000;
    font-family: pixel, Arial, sans-serif;
    font-sixe: 0.8 rem;
    `
