import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

// Install required packages
// Run the following command in your terminal:
// npm install express sequelize mysql2

// Create an instance of Express
const app = express();

// Create a Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'mysql',
    host: 'localhost',
});

// Define your models and their associations
const User = sequelize.define('User', {
    Username: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    PasswordHash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

const Poll = sequelize.define('Poll', {
    PollID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
    },
    CreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    EndTime: {
        type: DataTypes.DATE,
    },
});

const Choice = sequelize.define('Choice', {
    ChoiceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    PollID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

User.hasMany(Poll, { foreignKey: 'CreatedBy' });
Poll.belongsTo(User, { foreignKey: 'CreatedBy' });
Poll.hasMany(Choice, { foreignKey: 'PollID' });
Choice.belongsTo(Poll, { foreignKey: 'PollID' });

// Define your routes
// ...

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
