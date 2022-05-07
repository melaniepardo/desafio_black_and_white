const Jimp = require('jimp')
const fs = require('fs')

const imageProcessor = (file, res) => {
    Jimp.read(file, (jimpErr, jimpImage) => {// Usar el método read del objeto Jimp definiendo como primer parámetro la url
        //de una imagen
        jimpImage// Aplicar los siguientes métodos(resize, greyscale, write)
            .resize(350, Jimp.AUTO)
            .quality(60)
            .greyscale()
            .writeAsync('newImg.jpg')
            .then(() => {
                //  Usar el módulo fs para la lectura del archivo creado.

                fs.readFile('newImg.jpg', (err, image) => {
                    //  Definir la cabecera de la respuesta a la consulta del servidor con un
                    // Content - Type en valor image / jpeg y terminar la consulta devolviendo la data del
                    //archivo leído con el readFile.

                    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                    res.write(image)
                    res.end()
                })
            })
    })
}

module.exports = imageProcessor