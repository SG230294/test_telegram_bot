"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import 'source-map-support/register'
const telegraf_1 = require("telegraf");
const mathjs_1 = require("mathjs");
const tgToken = "5006553438:AAGtfisPFLv71VIiMj7Rzk-x63_BjJYJ4hg";
const bot = new telegraf_1.Telegraf(tgToken);
bot.on('text', (ctx) => ctx.reply((0, mathjs_1.evaluate)(ctx.message.text)));
bot.launch();
console.log('Done!');
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
