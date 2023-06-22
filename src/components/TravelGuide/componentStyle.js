import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #eef4f7;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-weight: 500;
  font-size: 30px;
  border-bottom: 2px solid #52bbf0;
`

export const TraveLBody = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TravelCard = styled.ul`
  width: 100%;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`
