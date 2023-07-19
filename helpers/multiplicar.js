const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base, listar, hasta) => {
    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log(colors.rainbow('====================='));
            console.log('    Tabla del ',base );
            console.log(colors.rainbow('====================='));
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida,);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
} 