// STRETCH
exports.seed = function(knex){
    return knex('cars').truncate()
           .then(function (){
               return knex('cars').insert([
                   {vin:'45685741369874569',make:'BMW',model:'Mini Cooper',mileage:35000,title:'John Smith',transmission:'Automatic'},
                   {vin:'12345678963214589',make:'Ford',model:'Mustang',mileage:50000,title:'Henry Ford',transmission:'Manual'},
                   {vin:'78945612374185291',make:'Toyota',model:'Camry',mileage:100000,title:'Jason Robers',transmission:'Automatic'}
               ])
           })
}
