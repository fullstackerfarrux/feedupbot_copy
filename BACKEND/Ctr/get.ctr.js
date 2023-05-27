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

export default { getburger, getkombo, getsendvich };
