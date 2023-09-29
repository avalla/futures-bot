import chalk from 'chalk';
import pkg from './package.json' assert {type: "json"};

const banner = `

___________      __                                __________        __   
\\_   _____/_ ___/  |_ __ _________   ____   ______ \\______   \\ _____/  |_ 
 |    __)|  |  \\   __\\  |  \\_  __ \\_/ __ \\ /  ___/  |    |  _//  _ \\   __\\
 |     \\ |  |  /|  | |  |  /|  | \\/\\  ___/ \\___ \\   |    |   (  <_> )  |  
 \\___  / |____/ |__| |____/ |__|    \\___  >____  >  |______  /\\____/|__|  
     \\/                                 \\/     \\/          \\/
                  
Made in Italy with ❤ :: Version ${pkg.version}

                      ${chalk.red.bold('-> USE AT YOUR OWN RISK <-')}
`;

export default banner;