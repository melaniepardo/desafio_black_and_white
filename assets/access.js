// 1. El servidor debe ser levantado por instrucción de una aplicación Node que use el
// paquete Yargs para capturar los argumentos en la línea de comando.Se deberá
// ejecutar el comando para levantar el servidor solo si el valor de la propiedad “key” es
// la correcta(123).

const yargs = require('yargs')
const child = require('child_process')

const key = '123'
const argv = yargs
    .command(
        'login',
        'Comando de acceso',
        {
            key: {
                describe: 'Contraseña',
                demand: true,
                alias: 'k',
            },
        },
        (args) => {
            if (args.key == key) {
                child.exec('node app.js', (err, stdout) => {
                    err ? console.log(err) : console.log(stdout)
                })
            } else { 
                console.log('Credenciales incorrectas')
            }
        }
    )
    .help().argv







// 4. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen
// tomada por la URL enviada del formulario con el paquete Jimp.La imagen debe ser
// procesada en escala de grises, con calidad a un 60 % y redimensionada a unos 350px
// de ancho.Posteriormente debe ser guardada con nombre “newImg.jpg” y devuelta al
// cliente.

// // Paso 1  Importar en una constante el paquete Jimp.
// const Jimp = require('jimp')
// // Paso 2 : Importar en una constante el módulo http.
// const http = require('http')
// // Paso 3  Importar en una constante el módulo fs
// const fs = require('fs')
// //
