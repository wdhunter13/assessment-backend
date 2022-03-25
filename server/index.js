const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
					 "A feather in the hand is better than a bird in the air.",
           "A fresh start will put you on your way.",
           "A friend asks only for your time not your money.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.post("api/fortune", (req, res) => {
  let { fortune } = req.body
        let {favFortune } = {
            id: globalId,
            fortune,
        }
        fortune.push(favFortune)
        res.status(200).send(fortune)
        globalId++
    },
)

app.delete ("api/fortune", (req, res) => {
  let index = fortune.findIndex(elem => elem.id === +req.params.id)
  fortune.splice(index, 1)
  res.status(200).send(fortune)
},
)


app.listen(4000, () => console.log("Server running on 4000"));

app.post('/api/users', (req, res) => {
  console.log(req.body) 
  let username = req.body.username
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  res.status(200).send(`Welcome, ${username}! You will do great! ${firstName} ${lastName}.`)
})