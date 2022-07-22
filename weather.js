#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('Сонечко, ти забув передати токен')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
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
    getWeather('kharkiv')
    //Вывести погоду
};

initCLI()

