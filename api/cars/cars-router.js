// DO YOUR MAGIC
const Cars = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

const router = require('express').Router()


router.get('/',(req,res,next)=>{
    Cars.getAll()
    .then(cars=>{
        res.json(cars)
    })
    .catch(error=>next(error))
})

router.get('/:id',checkCarId,(req,res,next)=>{
    Cars.getById(req.params.id)
    .then(car=>{
        res.status(200).json(car)
    })
    .catch(error =>next(error))
})

router.post('/',
              checkCarPayload,
              checkVinNumberValid,
              checkVinNumberUnique,(req,res,next)=>{
    
     Cars.create(req.body)
     .then(newCar=>{
         res.status(201).json(newCar)
     })
     .catch(error =>next(error))

})

router.use((err, req, res, next) => { 
    
    res.status(500).json({ message: err.message, stack: err.stack })
  })


  module.exports = router

