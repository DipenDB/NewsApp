

import React, {useContext} from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import NewsContext from '../Stores/Context/NewsContext';

const DetailScreen=(props)=>{

    const newsContext=useContext(NewsContext);
    const selectedNews = newsContext.headlines.find(data=>data.publishedAt === props.route.params.publishedAt)
    React.useLayoutEffect(()=>{props.navigation.setOptions({title: selectedNews.title})})


    // console.log(props.route.params.source)
    // console.log(props.route.params.sourceName)

    // const sources=newsContext.sources;
    // console.log(sources)
    // const selectedSource = newsContext.sources.find(data=>data.id === props.route.params.id && data.name === props.route.params.sourceName )
    const selectedSource = newsContext.sources.find(data=>data.name === props.route.params.sourceName )

    console.log(selectedSource)




    return(
        <ScrollView style={styles.container}>
            <View style={{background: 'black',overflow: 'hidden',width:'100%', height:250,}}>
                <Image
                    style={styles.image}
                    source={{uri:selectedNews.urlToImage}}
                />
                <View style={styles.overlay}/>
                <View style={{position:'absolute',bottom:10,padding:10,}}>
                    <Text numberOfLines={2} style={{color:'white',fontSize:20,fontWeight:'bold'}}>{selectedNews.title}</Text>
                </View>

            </View>

            {/*----------------------News Detail -------------------------------*/}
            <View style={{padding:10,}}>
                <Text style={{fontWeight:'bold',fontSize:16,}}>{selectedNews.description}</Text>
                <Text style={{fontSize:15,}}>{selectedNews.content}</Text>


                <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
                    <Text style={{fontSize:14, color:'#9c9c9c'}}>{selectedNews.author}</Text>
                    <Text style={{fontSize:14,color:'#9c9c9c'}}>{selectedNews.publishedAt}</Text>
                </View>
            </View>

            {/*---------------------------Sources-----------------------------------------*/}
            <View style={{marginTop:10,}}>
                <View style={{height: 50,width: '100%',backgroundColor:'#0790e6',alignItems:'center',justifyContent:'center'}}>
                    {/*<Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Source: {selectedSource.name}</Text>*/}
                    <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Source: </Text>
                </View>

                <View style={{padding:10,}}>
                    <Text style={{fontWeight:'bold'}}>Category : <Text style={{fontWeight:'normal',textTransform: 'capitalize'}}>{selectedSource.category}</Text></Text>
                    <Text style={{fontWeight:'bold'}}>Description : <Text style={{fontWeight:'normal',textTransform: 'capitalize'}}>{selectedSource.description}</Text></Text>
                    <Text style={{fontWeight:'bold'}}>Language : <Text style={{fontWeight:'normal',textTransform: 'capitalize'}}>{selectedSource.language}</Text></Text>
                    <Text style={{fontWeight:'bold'}}>Source URL : <Text style={{fontWeight:'normal'}}>{selectedSource.url}</Text></Text>


                </View>

            </View>



        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image:{
        width:'100%',
        height:'100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.6)',
    }
});


export default DetailScreen;



