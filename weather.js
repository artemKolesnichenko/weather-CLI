#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printError, printSuccess } from "./services/log.service.js";


const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        //сохранить город
    }
    if (args.t) {
        //Сохранить токен
    }
    //Вывести погоду
};

initCLI()

