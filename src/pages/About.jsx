import React from 'react'
import './About.scss'
import ImageBanner from '../components/ImageBanner'
import DescriptionPanel from '../components/DescriptionPanel'

function About() {
  return (
    <>
        <ImageBanner/>
        <div className='about__container'>
        <DescriptionPanel content="C'est très important" title="Fiabilité" />
        <DescriptionPanel content="C'est très important" title="Respect" />
        <DescriptionPanel content="C'est très important" title="Service" />
        <DescriptionPanel content="C'est très important" title="Responsabilité" />
        </div>
    </>
  )
}

export default About