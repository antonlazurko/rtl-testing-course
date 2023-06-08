import axios from "axios"
import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row'

import { ScoopOption } from "./ScoopOption"
import { ToppingOption } from "./ToppingOption"
import { AlertBanner } from "../common/AlertBanner"

export const Options = ({optionType}) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`).then(res => setItems(res.data)).catch(error=>setError(true))

  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption

  const optionitems = items?.map(({name, imagePath}) => (
    <ItemComponent
      key={name}
      name={name}
      imagePath={imagePath}/>)
  )
  return (
    error ? <AlertBanner/> : <Row>{optionitems}</Row>
  )
}
