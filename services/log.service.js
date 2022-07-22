import chalk from 'chalk'
import dedent from 'dedent';

const printError = (error) => {
    console.log(`${chalk.black.bgRed(' Йой, щось зламалось :( ')} \n${error}`);
};

const printSuccess = (message) => {
    console.log(`${chalk.black.bgGreen(' Все добре, Ви чудові <3 ')} \n${message}`);
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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.black.bgBlueBright(' Нехай проблеми та незгоди не роблять Вам в житті погоди ')}
        Прогноз погоди для міста ${res.name} в данну хвилину:
        ${icon} ${res.weather[0].description}
        Температура: ${res.main.temp} (Відчувається як: ${res.main.feels_like})
        Вологість: ${res.main.humidity}%
        Швидкість вітру: ${res.wind.speed} м/с
        `
    )
}


export{printError, printSuccess, printHelp, printWeather}