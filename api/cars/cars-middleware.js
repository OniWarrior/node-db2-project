const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC

  // Send database the id
  Cars.getById(req.params.id)  
  .then((car)=>{
    if(car){      // if found then assign returned car to req.car object
      req.car = car
      next()
    }
    else{
      next({
        status:404,
        message:`Car with id ${req.params.id} is not found`
      })
    }    
  })  
  .catch(error=>{
    next(error)
  })


}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
