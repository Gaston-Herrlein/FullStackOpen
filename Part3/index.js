const express = require ('express')
const app = express()

app.use(express.json())

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

app.get("/api/persons", (request, response) => {
    response.json(notes)
})

app.get("/info", (request, response) => {
    const date = new Date()
    const msn = `<p>PhoneBook has info for 2 people</p>
    <p>${date}</p>`
    response.send (msn)
})
const PORT = 3001
app.listen(PORT, () => {
    console.log ('Server running in port 3001')
})