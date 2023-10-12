import './App.css';
import InvoiceTable from './components/InvoiceTable';
import ModeButtons from './components/ModeButtons';
import DescriptionCell from './components/DescriptionCell';


function App({ initialData }) {
  
  return(
  <>
  <InvoiceTable initialInvoiceData={initialData} />
  </>
  
  )
}

export default App;
