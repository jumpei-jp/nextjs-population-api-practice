const Population = async (req, res) => {
  //人口を取得
  const response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=1`,{
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.OPEN_POPULATION_API_KEY
      },
    }
  );

  //APIの結果を返す
  const data = await response.json();
  res.status(200).json(data.result.data[0]); //対象都道府県の総人口のみを取得
};

export default Population