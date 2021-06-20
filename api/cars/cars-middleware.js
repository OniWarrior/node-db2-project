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
  // Destructure payload from req.body
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
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
