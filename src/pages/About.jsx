import React from 'react'
import './About.scss'
import ImageBanner from '../components/ImageBanner'
import DescriptionPanel from '../components/DescriptionPanel'

function About() {
  return (
    <>
        <ImageBanner/>
        <div className='about__container'>
        <DescriptionPanel/>
        <DescriptionPanel/>
        <DescriptionPanel/>
        <DescriptionPanel/>
        </div>
    </>
  )
}

export default About