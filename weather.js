#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Токен збережен');
    } catch (e) {
        printError(e.message);
    }
    
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        //сохранить город
    }
    if (args.t) {
        return saveToken(args.t);
    }
    //Вывести погоду
};

initCLI()

