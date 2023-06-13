import axios from "axios"
import { useEffect, useState } from "react"
import Row from 'react-bootstrap/Row'
import {pricePerItem} from '../../constants'
import { ScoopOption } from "./ScoopOption"
import { ToppingOption } from "./ToppingOption"
import { AlertBanner } from "../common/AlertBanner"
import { formatCurrency } from "../../utils"
import { useOrderDetails } from "../../contexts/OrderDetails"

export const Options = ({optionType}) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const {totals} = useOrderDetails()

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`)
      .then(res => setItems(res.data))
      .catch(error=>setError(true))

  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

  const optionitems = items?.map(({name, imagePath}) => (
    <ItemComponent
      key={name}
      name={name}
      imagePath={imagePath}/>)
  )
  return (
    error ? <AlertBanner/> : (
      <>
        <h2>{title}</h2>
        <p>{formatCurrency(pricePerItem[optionType])}</p>
        <p>{title} : {formatCurrency(totals[optionType])}</p>
        <Row>{optionitems}</Row>
      </>
    )
  )
}
