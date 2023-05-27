import express from "express";
import client from "./db/config.js";
import cors from "cors";
import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
import lavashRoute from "./Routes/lavash.route.js";
import get from "./Routes/get.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

let port = process.env.PORT || 3030;

const bot = new TelegramBot(process.env.TelegrammApi, { polling: true });
const webAppUrl = "https://feedupbot.netlify.app/";

bot.onText(/start/, (msg) => {
  console.log(msg);

  bot.sendMessage(
    msg.chat.id,
    `  Assalomu alaykum ${msg.chat.first_name}!
Xush kelibsiz! Men FeedUp-ning rasmiy botiman.
Bu erda siz menyu bilan tanishishingiz va uyga 
buyurtma berishingiz mumkin!
Mahsulotlarni 🥄 Menu bo'limidan tanlang`,
    {
      reply_markup: JSON.stringify({
        keyboard: [[{ text: "Отправить контакт", request_contact: true }]],
        resize_keyboard: true,
      }),
    }
  );
});

bot.on("contact", (msg) => {
  bot.sendMessage(msg.chat.id, `Пожалуйста отправьте геопозицию`, {
    reply_markup: JSON.stringify({
      keyboard: [[{ text: "Отправить геопозицию", request_location: true }]],
      resize_keyboard: true,
    }),
  });
});

bot.on("location", (msg) => {
  let { latitude, longitude } = msg.location;

  bot.sendMessage(
    msg.chat.id,
    `Отлично! Для выбора товара нажмите на кнопку "Меню"`,
    {
      reply_markup: JSON.stringify({
        keyboard: [[{ text: `Меню`, web_app: { url: webAppUrl } }]],
        resize_keyboard: true,
      }),
    }
  );
});

app.use(lavashRoute);
app.use(get);

app.listen(port, () => {
  console.log(port);
});
