import React from 'react';
import { FlatList } from 'react-native';
import Card from './common/Card';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchData() {
     try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        setData(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <Card name={item.title} price={item.price} image={item.images[0]} productId={(item.id).toString()} />
      )}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{
      paddingHorizontal: 6,
      paddingBottom: 20,
      paddingTop: 10,
      backgroundColor: '#FEFCF3',
      }}
    />
  );
}
