const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        default: 1,
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type:'boolean',
        default: false,
        describe: 'Muesta la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        default: 10,
        describe: 'Determina el tamaño de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;