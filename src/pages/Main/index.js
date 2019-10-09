import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import api from '../../services/api';

export default function App() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    async function marvel() {
      const data = await api();
      console.log(data);
      setHero(data);
    }

    marvel();
  }, []);

  return <View />;
}
