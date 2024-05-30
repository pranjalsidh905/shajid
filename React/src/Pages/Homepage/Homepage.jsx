import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import SectionPage from '../../Components/SectionPage/SectionPage'
import SectionPage2 from '../../Components/SectionPage2/SectionPage2'
import ProductContainer from '../../Components/ProductContainer/ProductContainer'
import OfferArea from '../../Components/OfferArea/OfferArea'
import NewProduct from '../../Components/NewProduct/NewProduct'
import InspiredPrdouct from '../../Components/InspiredPrdouct/InspiredPrdouct'
import LatesfProduct from '../../Components/LatesfProduct/LatesfProduct'
import FooterSeection from '../../Components/FooterSeection/FooterSeection'

function Homepage() {
    return (
      <>
       <NavBar/>
      <SectionPage />
      <SectionPage2 />
      <ProductContainer />
      <OfferArea />
      <NewProduct />
      <InspiredPrdouct />
      <LatesfProduct />
      <FooterSeection />
        </>
  )
}

export default Homepage