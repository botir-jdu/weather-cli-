import getArgs from './helpers/args.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'
import { saveKeyValue, getKeyValue } from './services/storage.service.js';

const saveToken = async token =>{
    try{
        await saveKeyValue('token', token)
        printSuccess('Token was saved')
    }catch(error){
        printError(error.message)
    }
}

const startCLI = () =>{
    const args = getArgs(process.argv)
    console.log(args);
    if(args.h){
        // help
        printHelp()
    }
    if(args.s){
        // save
    }
    if(args.t){
        // token
        return saveToken(args.t)
    }
    // result
}

startCLI()