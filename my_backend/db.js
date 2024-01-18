import  Sequelize  from "sequelize";
import env from 'dotenv';

env.config();

const db = new Sequelize({
    dialect: "mysql",	
    database: "foodwaste",	
    username: "root",
    password: "nicholas",
    host: "127.0.0.1",
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default db;