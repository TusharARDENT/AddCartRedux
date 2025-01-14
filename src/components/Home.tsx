import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import Card from './common/Card';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const limit = 10;

  async function fetchData(pageNumber: number) {
    setIsFetching(true);
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(pageNumber - 1) * limit}`);
      const result = await response.json();
      setData((prevData) => [...prevData, ...result.products]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const loadMoreData = () => {
    if (!isFetching) {
      setPage((prevPage) => prevPage + 1); 
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <Card name={item.title} price={item.price} image={item.images[0]} productId={item.id.toString()} />
        )}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          paddingHorizontal: 6,
          paddingBottom: 20,
          paddingTop: 10,
          backgroundColor: '#FEFCF3',
        }}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetching ? <ActivityIndicator size="large" color="#0000ff" /> : null} // Show loading indicator
      />
    </View>
  );
}