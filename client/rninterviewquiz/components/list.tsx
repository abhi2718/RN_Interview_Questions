import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';

const Item = ({
  item,
  onLike,
}: {
  item: {
    id: number;
    name: string;
    likes: number;
  };
  onLike: (id: number) => void;
}) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <View style={{padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
      <Text>{item.name}</Text>
      <Text>Likes: {item.likes}</Text>
      <TouchableOpacity onPress={() => onLike(item.id)}>
        <Text style={{color: 'blue'}}>Like</Text>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const [items, setItems] = useState(
    Array.from({length: 5}, (_, i) => ({id: i, name: `Item ${i}`, likes: 0})),
  );

  const handleLike = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? {...item, likes: item.likes + 1} : item,
      ),
    );
  };

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <Item item={item} onLike={handleLike} />}
    />
  );
};

export default List;
