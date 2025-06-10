//Homescreen 
//タグ一覧や新規投稿ボタン

import { Button, FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";



const tags = ["学習","仕事","趣味","健康"] //ダミーデータ


export default function HomeScreen () {
    const router = useRouter();


return (
    <View className="flex-1 pt-16 px-5 bg-white">
    <Text className="text-2xl fonnt-bold mb-4">タグ一覧</Text>
    <FlatList
    data={tags}
    keyExtractor={(item)=> item}
    renderItem={({item})=> (
        <View className="mb-2">
        <Button title={item}
        onPress={() => router.push(`/tag/${item}`)}
        />
        </View>
    )}
    />

    <View className="mt-10">
    <Button 
    title="新規投稿"
    onPress={()=> router.push("/post")}
    color="#4CAF50"
    />
    </View>
    </View>
);
}