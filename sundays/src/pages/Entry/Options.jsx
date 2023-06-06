import axios from "axios"
import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row'

import { ScoopOption } from "./ScoopOption"
import { ToppingOption } from "./ToppingOption"

export const Options = ({optionType}) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then(res => setItems(res.data)).catch(error=>error)

  }, [optionType])

const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

const optionitems = items?.map(({name, imagePath}) => (
<ItemComponent
  key={name}
  name={name}
  imagePath={imagePath}/>)
)
  return (
    <Row>{optionitems}</Row>
  )
}
