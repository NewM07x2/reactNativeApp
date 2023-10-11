import { useState, useEffect, useReduce, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem';
import axios from 'axios';
import Constants from './Constants';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.constants.newsApiKey}`

export default App = () => {
  const [articles, setArticles] = useState()

  const getInitArticles = async () => {
    console.log('B')
    try {
      // API処理
      const response = await axios.get(URL)
      setArticles(response.data.articles)
      return response.data.articles
    } catch (error) {
      console.log(error)
    }
  }

  // 第二引数を[] とすることでコンポーネントの初期生成時に一度だけ処理する。
  useEffect(() => {
    getInitArticles()
  }, [])

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={articles}
          renderItem={({ item }) => {
            return (
              <ListItem
                imageUrl={item.urlToImage}
                title={item.title}
                author={item.author}
              />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // flexDirection: "column",
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
