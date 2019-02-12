const Sequelize = require('sequelize');

const sequelize = require('../config/keys');

const Item = sequelize.define('items',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Item.sync().then(result=>{
    console.log(result)
}).catch(err =>{
    //console.log(err)
});

module.exports = Item;
