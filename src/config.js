module.exports.config = {
    grpc : {
        keepCase: true,
        longs: String,
        enums: String,
        array: true,
        defaults: true,
        oneofs: true
    },
    sqs: { 
        "accessKeyId": process.env.SQS_ACCESS_KEY_ID, 
        "secretAccessKey": process.env.SQS_SECRET_ACCESS_KEY, 
        "region": process.env.SQS_REGION 
    },
    mail: {
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: null,
          pass: null
        },
        tls: {
            rejectUnauthorized: false
        }
      }

}