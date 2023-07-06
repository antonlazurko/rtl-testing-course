import { Container } from 'react-bootstrap';
import OrderEntry from './pages/Entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry/>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
