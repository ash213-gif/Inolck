import React from 'react'
import Studywrite from './Studywrite'
import Acheviement from '../Componenets/Achiemntdiv'
import Card from './Cards'
import Ourtopper from './OurTopper'
import Table from './Table'
import BoxImage from './BoxImage'
import Content from '../Componenets/Content'

export default function Home() {
  return (
    <div className="">
      <Studywrite />
      <Acheviement/>
      <Card/>
      <Content />
      <Ourtopper/>
      <BoxImage />
      <Table />
     
    </div>
  )
}
