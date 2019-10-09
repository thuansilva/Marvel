import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {
  Post,
  Header,
  Hero,
  Name,
  PostImage,
  Description,
  Loading,
} from './styles';

import axios from 'axios';
import md5 from 'md5';

const PUBLIC = 'API_PUBLIC';
const PRIVATE = 'API_PRIVATE';

const ts = Number(new Date());
const hash = md5(ts + PRIVATE + PUBLIC);

export default function App() {
  const [hero, setHero] = useState([]);
  const [page, setPage] = useState(10);
  const [load, setLoad] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(limitpage = page) {
    setLoad(true);
    const api = axios.create({
      baseURL: `https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=${limitpage}&ts=${ts}&apikey=${PUBLIC}&hash=${hash}`,
      timeout: 5000,
      method: 'get',
      responseType: 'json',
    });

    const response = await api();
    setHero(response.data.data.results);
    setPage(page + 10);
    setLoad(false);
  }

  useEffect(() => {
    loadPage();
  });

  async function reReloading() {
    setRefreshing(true);
    await loadPage(1);
    setRefreshing(false);
  }

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={hero}
        keyExtractor={results => String(results.id)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={load && <Loading />}
        onRefresh={reReloading}
        refreshing={refreshing}
        onEndReached={() => loadPage()}
        renderItem={({item}) => (
          <Post>
            <Header>
              <Hero
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <Name>{item.name} </Name>
            </Header>
            <PostImage
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
            <Description>
              <Name>{item.name} ...</Name>
              {item.description}
            </Description>
          </Post>
        )}
      />
    </View>
  );
}
