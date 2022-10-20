import styled from "styled-components";

export const ButtonG = styled.button`
  background-color: orange;
  width: 100px;
  height: 30px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`

export const GaragemContainer = styled.main`
  background-color: gray;
  padding-top: 20px;
  min-height: 80vh;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Estacionamento = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 
  [left] 1fr  
  [right] 1fr
`