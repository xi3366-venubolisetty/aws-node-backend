
const AWS = require('aws-sdk');
var instance = null;
const aws_remote_config = {
    accessKeyId: process.env["access-key"],
    secretAccessKey: process.env["access-secret"],
    region: 'ap-south-1',
  }
module.exports = {
    aws_table_name: 'aws-ceos',
    aws_remote_config: aws_remote_config,
    getInstance : function() {
        if(instance){
          return instance;
        }
        AWS.config.update(aws_remote_config);
        const client = new AWS.DynamoDB.DocumentClient();
        return client;
    }
};
