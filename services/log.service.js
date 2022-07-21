import chalk from 'chalk'
import dedent from 'dedent';

const printError = (error) => {
    console.log(chalk.black.bgRed(" Йой, щось зламалось :( " + ' ' + error));
};

const printSuccess = (message) => {
    console.log(chalk.black.bgGreen("Все добре, Ви чудові <3 " + ' ' + message));
};

const printHelp = () => {
    console.log(
        dedent`${chalk.black.bgCyan(' Тримай перелік команд і промінчик добра :)')}
           ┌ - - - - - - - - - - - - - - - - - - ┐
           | Без параметрів - виведення погоди   |
           | -s [CITY] для встановлення міста    |
           | -h  для виведення допомоги          |
           | -t [API_KEY] для збереження токена  |
           └ - - - - - - - - - - - - - - - - - - ┘
        `
         
    )
}


export{printError, printSuccess, printHelp}