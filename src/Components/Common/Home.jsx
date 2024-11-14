import React from 'react'
import Category from './Category'
import Collection from './Collection'
import GetApp from './GetApp'
import Exploreoptio from './Exploreoptio'
import PopupImage from '../../Other/PopupImage'
const Home = () => {
  return (
    <div>
        <Category/>
        <Collection/>
        <Exploreoptio/>

        <GetApp/>
        <PopupImage/>
    </div>
  )
}

export default Home