"user strict"

const {v4} = required("uuid")
const AWS = require("aws-sdk")

const insertItem = async (event) => {

        const item = JSON.parse(event.body);
        const createdAt = new Date().toISOString();
        const id = v4();

        const dynamoDB = new AWS.DynamoDB.DocumentClient();

        const newItem = {
            id,
            item,
            createdAt,
            ItemStatus: false      
        }

    await dynamoDB.put(
    {
        TableName : "ItemTableNew", 
        Item: newItem
    }
    )


    return{
        statuscode: 200,
        body: JSON.stringfy(newItem)
    };

module.exports = {
    handler:insertItem
}
}