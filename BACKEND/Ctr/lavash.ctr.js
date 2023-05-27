import client from "../db/config.js";

const getlavashs = async (req, res) => {
  const getLavashs = await client.query("SELECT * from lavash");
  res.status(200).json(getLavashs.rows);
};

export default { getlavashs };
