const express = require ('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

morgan.token('pos', function (req, res)  {
  return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :pos'))



const notes = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

const generateId = () => Math.floor(Math.random() * 1000000)


app.get("/api/persons", (request, response) => {
    response.json(notes)
})

app.get ("/info", (request, response) => {
    const date = new Date()
    const msn = `<p>PhoneBook has info for 2 people</p>
    <p>${date}</p>`
    response.send (msn)
})

app.get("/api/person/:id", (req, res) => {
  const id = Number (req.params.id)

  const person = notes.find(person => person.id === id)

  if (person){
    res.json(person)
  }
  else{
    return res.status(404).json ({error: 'Person not found'}).end()
  }
})

app.delete ('/api/person/:id', (req, res) => {
  const id = Number (req.params.id)

  const persons = notes.filter(person => person.id !== id)
  res.json(persons) 
})

app.post('/api/person', (req, res) => {
  const newId = generateId()
  const body = req.body
  if (!body.name || !body.number){
    return res.status(400).json({error: "Incomplete required fields"})
  } 
  else if (notes.map(person => person.name).includes(body.name)) {
    return res.status(400).json({error: "Name already exists"})
  }
  
  const person = {
    "name": body.name,
    "number": body.number,
    "id": newId
  }

  const newNotes = notes.concat(person)

  res.json(newNotes)
})


const PORT = 3001
app.listen(PORT, () => {
    console.log ('Server running in port 3001')
})