import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TravelItem from '../TravelItem'

import {BgContainer, Heading, TraveLBody, TravelCard} from './componentStyle'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
}

class TravelGuide extends Component {
  state = {travelPackages: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTravels()
  }

  updateList = packagesList => {
    const updateList = packagesList.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({travelPackages: updateList, apiStatus: apiConstants.success})
  }

  getTravels = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      this.updateList(data.packages)
    }
  }

  displayTravels = () => {
    const {travelPackages} = this.state

    return (
      <TravelCard>
        {travelPackages.map(eachItem => (
          <TravelItem key={eachItem.id} travelItem={eachItem} />
        ))}
      </TravelCard>
    )
  }

  loadLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  getPackages = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.displayTravels()
      case apiConstants.progress:
        return this.loadLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <Heading>Travel Guide</Heading>
        <TraveLBody>{this.getPackages()}</TraveLBody>
      </BgContainer>
    )
  }
}

export default TravelGuide
