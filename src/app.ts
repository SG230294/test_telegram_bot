//import 'source-map-support/register'
import {Telegraf} from 'telegraf'
import {evaluate} from 'mathjs'

const tgToken = "5006553438:AAGtfisPFLv71VIiMj7Rzk-x63_BjJYJ4hg"
const bot = new Telegraf(tgToken)

bot.on('text', (ctx) => ctx.reply(evaluate(ctx.message.text)))
bot.launch()

console.log('Done!')

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))