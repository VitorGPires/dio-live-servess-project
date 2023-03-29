"user strict"

const AWS = require("aws-sdk")

const fetchItems = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

    let item;


    try{
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew",
            key: {id}}).promise()

    item= result.item

    } catch{
        console.log(error)
    }

    return{
        statuscode: 200,
        body: JSON.stringfy(newItem)
    };



    module.exports = {
        handler:insertItem
    }
}