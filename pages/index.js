import { useState, useEffect } from 'react';
import { Prefecture } from './api/prefecture';

export default function Home() {
  const [prefectures, setPrefecture] = useState([]);
  useEffect(() => {
    const fetchPrefecture = async () => {
      const response = await fetch('/api/prefecture');
      const data = await response.json();
      setPrefecture(data.result); //prefectureの中に取得したデータを入れる
    };
    fetchPrefecture();
  }, []);

  return (
    <>
      <ul>
      {prefectures.map(pref => <p key={pref.prefCode}>{`${pref.prefCode}: ${pref.prefName}`}</p>)}
      </ul>
    </>
  );
}
