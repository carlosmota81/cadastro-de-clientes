const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('nodesequelize', 'root', '1260',{
    host: "localhost",
    dialect: 'mysql'
})

/*try{

    sequelize.authenticate()
    console.log('Conectou com sucesso!');

}catch(err){
    console.log('Não foi possivel conectar: ', err);
}*/


module.exports = sequelize;