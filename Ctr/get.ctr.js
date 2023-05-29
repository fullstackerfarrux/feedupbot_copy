import client from "../db/config.js";

const getburger = async (req, res) => {
  const getBurger = await client.query("SELECT * from burger");
  res.status(200).json(getBurger.rows);
};

const getkombo = async (req, res) => {
  const getKombo = await client.query("SELECT * from kombo");
  res.status(200).json(getKombo.rows);
};

const getsendvich = async (req, res) => {
  const getSendvich = await client.query("SELECT * from sendvich");
  res.status(200).json(getSendvich.rows);
};

const getpizza = async (req, res) => {
  const getPizza = await client.query("SELECT * from pizza");
  res.status(200).json(getPizza.rows);
};

const getnapitka = async (req, res) => {
  const getNapitka = await client.query("SELECT * from napitka");
  res.status(200).json(getNapitka.rows);
};

const getlonger = async (req, res) => {
  const getLonger = await client.query("SELECT * from longer");
  res.status(200).json(getLonger.rows);
};

const getsneki = async (req, res) => {
  const getSneki = await client.query("SELECT * from sneki");
  res.status(200).json(getSneki.rows);
};

const getsous = async (req, res) => {
  const getSous = await client.query("SELECT * from sous");
  res.status(200).json(getSous.rows);
};

const getvafli = async (req, res) => {
  const getVafli = await client.query("SELECT * from vafli");
  res.status(200).json(getVafli.rows);
};

export default {
  getburger,
  getkombo,
  getsendvich,
  getpizza,
  getnapitka,
  getlonger,
  getsneki,
  getsous,
  getvafli,
};
