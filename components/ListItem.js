import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';


/**
 * 
 * @param {
 * imageUrl: 画像URL(string)
 * title: タイトル(string)
 * author: ニュース提供者(string)
 * } props 
 * @returns 
 */
export const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.author}>
          {props.author}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%" ,
    flexDirection: "row",
    marginVertical: 2
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    backgroundColor:"white",
    padding: 10,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
  },
  author: {
    fontSize: 12,
    color: "gray"
  }
});
