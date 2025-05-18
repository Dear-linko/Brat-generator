'use client'

import BratGenerator from './BratGenerator'
import { AdContainer } from '../Ads'

const BratGeneratorWithAds = ({ BratGeneratorLanguageText }) => {
  return (
    <AdContainer 
      position="sides" 
      leftSlot="3313300558"
      rightSlot="7050033712"
    >
      <BratGenerator BratGeneratorLanguageText={BratGeneratorLanguageText} />
    </AdContainer>
  )
}

export default BratGeneratorWithAds 