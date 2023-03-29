"user strict"

const AWS = require("aws-sdk")

const fetchItems = async (event) => {

const dynamoDB = new AWS.DynamoDB.DocumentClient();

let items;

try{
    const results = await dynamoDB.scan({
        TableName: "ItemTableNew"}).promise();

        items= results.items
    

}catch (error) {
    console.log
}
return{
    statuscode: 200,
    body: JSON.stringfy(newItem)
};

module.exports = {
handler:insertItem
}


} 