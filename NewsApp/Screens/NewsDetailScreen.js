

import React, {useContext} from 'react';
import {View,Text,StyleSheet,ScrollView,StatusBar,Image} from 'react-native';
import NewsContext from '../Stores/Context/NewsContext';


const NewsDetailScreen=(props)=>{
    const newsContext=useContext(NewsContext);
    const selectedNews = newsContext.allNews.find(data=>data.publishedAt === props.route.params.publishedAt)

    React.useLayoutEffect(()=>{props.navigation.setOptions({title: selectedNews.title})})


    return(
        <View style={styles.container}>
            <View>
                <Image
                    style={{height:300,width:'100%'}}
                    source={{uri:selectedNews.urlToImage}}
                />

                <View style={{position:'absolute',padding:20,marginTop:210,height:400,width:'100%' ,borderTopRightRadius:20,borderTopLeftRadius:20,backgroundColor: '#d9d9d9'}}>
                    <Text style={{fontWeight:'bold',fontSize:20,}}>{selectedNews.title}</Text>
                    <Text style={{fontSize:14,}}>{selectedNews.description}</Text>
                    <Text style={{fontSize:14,}}>{selectedNews.content}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:14, color:'blue'}}>{selectedNews.author}</Text>
                        <Text style={{fontSize:14,color:'green'}}>{selectedNews.publishedAt}</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});


export default NewsDetailScreen;



