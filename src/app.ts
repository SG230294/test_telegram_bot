import 'source-map-support/register'
import {Telegraf} from 'telegraf'
import {evaluate} from 'mathjs'
import * as dotenv from 'dotenv'
dotenv.config();

const tgToken = process.env.BOT_TOKEN as string
const bot = new Telegraf(tgToken)

bot.on('text', (ctx) => ctx.reply(tryToEvaluate(ctx.message.text.toString())));

function tryToEvaluate(str: string) {
    let result: string;
    try {
        result = evaluate(str);
    }
    catch(e){
        result = 'error';
        console.log(e);
    }
    return result;
}

bot.launch()

console.log('Done!')

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))