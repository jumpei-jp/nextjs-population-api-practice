const Prefecture = async (req, res) => {
  //都道府県名、都道府県コードを取得
  const response = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/prefectures`,{
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.OPEN_POPULATION_API_KEY
      },
    }

  );
  //apiを叩いた結果をdataに入れてステータスコード200でjsonで返す
  const data = await response.json();
  res.status(200).json(data);
};

export default Prefecture;