const config = require('../config');
const { v4: uuidv4 } = require('uuid');
const getUsers = function (req, res) {
    const docClient = config.getInstance();
    const params = {
        TableName: config.aws_table_name
    };

    docClient.scan(params, function (err, data) {

        if (err) {
            console.log(err)
            res.send({
                success: false,
                message: err
            });
        } else {
            const { Items } = data;
            res.send({
                success: true,
                users: Items
            });
        }
    });
}

const addUser = function (req, res) {
    const docClient = config.getInstance();
    const Item = { ...req.body };
    Item.id = uuidv4();
    const params = {
        TableName: config.aws_table_name,
        Item: Item
    };

    // Call DynamoDB to add the item to the table
    docClient.put(params, function (err, data) {
        if (err) {
            res.send({
                success: false,
                message: err
            });
        } else {
            res.send({
                success: true,
                message: 'Added Record',
                user: data
            });
        }
    });
}

module.exports = {
    getUsers,
    addUser
}