import {
  ListItem,
  TravelPlaceImage,
  PlaceName,
  Description,
} from './componentStyle'

const TravelItem = props => {
  const {travelItem} = props
  const {name, imageUrl, description} = travelItem

  return (
    <ListItem>
      <TravelPlaceImage src={imageUrl} alt={name} />
      <PlaceName>{name}</PlaceName>
      <Description as="p">{description}</Description>
    </ListItem>
  )
}

export default TravelItem
