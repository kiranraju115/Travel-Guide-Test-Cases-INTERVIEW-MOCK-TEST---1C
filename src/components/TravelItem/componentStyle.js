import styled from 'styled-components'

export const ListItem = styled.li`
  width: 40%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  margin-right: 10px;
`
export const TravelPlaceImage = styled.img`
  width: 100%;
  height: 150px;
`

export const PlaceName = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 500;
  font-size: 20px;
`
export const Description = styled(PlaceName)`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 400;
  font-size: 16px;
`
