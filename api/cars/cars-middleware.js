const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC

  // Send database the id
  Cars.getById(req.params.id)  
  .then((car)=>{
    if(car){      // if found then assign returned car to req.car object
      req.car = car
      next()
    }
    else{   // if not return 404 status indicating car with specified id not found
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
  // Destructure payload from req.body-- title and transmission are ommitted because they're optional.
  const {
    vin,
    make,
    model,
    mileage    
  } = req.body

  // if vin,make,model,or mileage is missing,respond with error message
  if(!vin){
    next({
      status:400,
      message:'vin field is missing'
    })    
  }
  else if(!make){
    next({
      status:400,
      message:'Make field is missing'
    })         
  }
  else if(!model){
    next({
      status:400,
      message:'Model field is missing'
    })
  }
  else if(!mileage){
    next({
      status:400,
      message:'Mileage field is missing'
    })
  }
  else{
    next()
  }
 

}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const{vin}=req.body
  vinValidator(vin)
  .then(validatedVin=>{
    if(validatedVin){
      req.vin = validatedVin
      next()
    }
    else{
      next({
        status:400,
        message:`vin ${validatedVin}is invalid`
      })
    }
  })
  .catch(error => next(error))

}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin}= req.body

  Cars.getAll()
  .then(cars=>{
    cars.forEach(element => {
      if(element.vin ===vin){
        next({
          status:400,
          message:`vin ${vin} already exists`
        })
      }      
    });
    next()
  })
  .catch(error =>next(error))

}

module.exports={
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
