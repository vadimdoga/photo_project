const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const galleryRoutes = express.Router()
const PORT = 4000

let Gallery = require('./gallery.model')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/photo_site', {useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection

connection.once('open', () => {
  console.log("Connection established with MongoDB")
})

galleryRoutes.get("/", (req, res) => {
  Gallery.find((err, galleries) => {
    if(err){
      console.log(err)
    } else {
       res.json(galleries)
    }
  })
})

galleryRoutes.route('/:id').get((req, res) => {
  let id = req.params.id
  Gallery.findById(id, (err, gallery) => {
      res.json(gallery)
  })
})

galleryRoutes.route('/update/:id').post((req, res) => {
  Gallery.findById(req.params.id, (err, gallery) => {
    if(!gallery){
      res.status(404).send("data is not found")
    } else {
      gallery.imageUrl = req.body.imageUrl
      gallery.imageName = req.body.imageName
      
      gallery.save()
      .then(gallery => {
        res.json('Todo updated!')
      })
      .catch(err => {
        res.status(400).send("Update not possible")
      })
    }
  })
})

galleryRoutes.post("/add", (req, res) => {
  console.log(req.body)
  let gallery = new Gallery(req.body)
  gallery.save()
    .then(gallery => {
      res.status(200).json({'gallery': 'gallery added successfull'});
    })
    .catch(err => {
      res.status(400).send('adding failed');
    })
})

app.use('/gallery', galleryRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ` + PORT);
});