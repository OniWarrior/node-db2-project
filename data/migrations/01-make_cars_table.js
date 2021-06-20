// DO YOUR MAGIC
// creation
exports.up = function(knex){
    return knex.schema.createTable('cars',table=>{
        table.increments()
        table.text('vin',100).unique().notNullable()
        table.text('make',128).notNullable()
        table.text('model',128).notNullable()
        table.integer('mileage').notNullable()
        table.text('title',128)
        table.text('transmission',100)
    })
}

// Destroy table
exports.down= function(knex){
    return knex.schema.dropTableIfExists('cars')

}