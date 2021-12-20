
const AWS = require('aws-sdk');
const sharp = require('sharp');
const fs = require('fs');
const KEY_ID = 'AKIA2A2QQ7UDLYN7H4PA'
const SECRET_KEY = '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'
const BUCKET_NAME = 'images-arqui'

const s3 = new AWS.S3({
    accessKeyId: KEY_ID,
    secretAccessKey: SECRET_KEY,
})

const params = {
    Bucket: BUCKET_NAME,
}

s3.createBucket(params, (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Bucket Created', data.Location)
    }
})

const uploadFile = (filename) => {
    const file = fs.readFileSync(filename)

    const params = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: file,
        ContentType: 'image/png',
    }

    s3.upload(params, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log('File Uploaded', data.Location)
        }
    })
}


const upload = async (req , res ) => {

    console.log(req.body)

    colorSpace(req.body.path , req.body.select , req.body.name)

    uploadFile('imagen_' + req.body.name + '.png')


}

const colorSpace = async ( path , type , name) => {

    console.log(path)
    console.log(type)
    const info = await sharp(path).toColorspace( type ).toFile('imagen_' + name + '.png')

}


module.exports = {
    upload
}


