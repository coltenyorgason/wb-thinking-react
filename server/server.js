import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan' // helps with more accurate console.logs from general messages

// Set up an express instance called 'app'
const app = express()

// Set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

// Set up a global variable to simulate a data-base
const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
  ];

  // Import handler functions
  import handlerFunctions from './controller.js'
  
// Routes go here 
app.get('/invoices', handlerFunctions.getInvoices)
app.post('/addInvoice', handlerFunctions.addInvoice)
app.delete('/deleteInvoice/:id', handlerFunctions.deleteInvoice)
app.put('/editInvoice/:id', handlerFunctions.editInvoice)
    

// Open up a door to the server
  ViteExpress.listen(app, 2319, () => console.log(`bigass server request, Report to http://localhost:2319`))
