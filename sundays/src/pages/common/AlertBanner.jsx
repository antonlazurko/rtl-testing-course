import Alert from 'react-bootstrap/Alert'

export const AlertBanner = ({message, variant}) => {
    const alertMessage = message || 'An unexpected error'
    const alertVariant = variant || 'danger'
  return (
    <Alert variant={alertVariant} style={{background: 'red'}}>{alertMessage}</Alert>
  )
}
