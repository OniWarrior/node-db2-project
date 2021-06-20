const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars').select('vin','make','model','mileage','title','transmission')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars')
         .where('id',id)
         .first()
}

const create = ({vin,make,model,mileage,title,transmission}) => {
  // DO YOUR MAGIC
  return db('cars')
         .insert({vin,make,model,mileage,title,transmission})
         .then(([id])=> getById(id))
}

module.exports={
  getAll,
  getById,
  create
}
