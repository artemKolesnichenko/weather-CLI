#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";


const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(arg);
    if (args.h) {
        //Вывод help
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