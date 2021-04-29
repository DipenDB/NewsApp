import React, {useContext} from 'react';
import {View,Text,StyleSheet,ScrollView,ScrollViewContext,Image,StatusBar,FlatList,Dimensions,TouchableOpacity} from 'react-native';
import NewsContext from '../Stores/Context/NewsContext';
import Carousel from 'react-native-snap-carousel';

const HomeScreen=(props)=>{

    const newsContext =  useContext(NewsContext);

    // console.log(newsContext.headlines)



    React.useEffect(()=>{
        getAllData();
    },[])

    const getAllData=()=>{
        newsContext.getAllNews();
        newsContext.getHeadlines();
        newsContext.getSources();
    }


    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('Detail',{publishedAt:item.publishedAt})} style={styles.cardContainer}>
                {/*<View style={{flexDirection:'row'}}>*/}
                    <Image
                        style={styles.cardImage}
                        source={{uri:item.urlToImage}}
                    />

                    <View style={{padding:5,}}>
                        <Text numberOfLines={2} style={{fontWeight:'bold',color:'#575757'}} >{item.title}</Text>
                        <Text numberOfLines={1} style={{fontWeight:'bold',color:'#0066ff'}}>{item.author}</Text>
                    </View>

                {/*</View>*/}


            </TouchableOpacity>
        )
    }

    const renderHeading=({item})=>{
        return(
            <TouchableOpacity onPress={()=>props.navigation.navigate('DetailScreen',{publishedAt:item.publishedAt,id: item.source.id,sourceName:item.source.name})} style={{height:150,width:200,marginRight:15,backgroundColor:'#d4d4d4',borderRadius: 20,overflow: 'hidden'}}>
                <Image
                    style={styles.headingImage}
                    source={{uri:item.urlToImage}}
                />
                <View style={{padding:5}}>
                    <Text numberOfLines={2} style={{fontWeight:'bold'}}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }



    // const renderSources=({item})=>{
    //     return(
    //         <TouchableOpacity onPress={()=>props.navigation.navigate('',{publishedAt:item.publishedAt})} style={{height:150,width:200,marginRight:15,backgroundColor:'#d4d4d4',borderRadius: 20,overflow: 'hidden'}}>
    //             <Image
    //                 style={styles.headingImage}
    //                 source={{uri:item.urlToImage}}
    //             />
    //             <View style={{padding:5}}>
    //                 <Text numberOfLines={2} style={{fontWeight:'bold'}}>{item.title}</Text>
    //             </View>
    //         </TouchableOpacity>
    //     )
    // }

        return(
            <ScrollView style={styles.container}>


                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={newsContext.allNews}
                    renderItem={renderItem}
                    containerCustomStyle={styles.carousel}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={300}
                    removeClippedSubviews={false}
                />



                <View style={{padding:10,}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>Trending</Text>
                    <FlatList
                        data={newsContext.headlines}
                        horizontal
                        nestedScrollEnable
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item,index) => item.index}
                        renderItem={renderHeading}
                    />

                </View>




            </ScrollView>


        )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

    },
    cardContainer:{
        height:300,
        width:300,
        borderRadius:20,
        backgroundColor: '#d4d4d4',
        marginBottom: 10,
        overflow:'hidden',
    },
    cardImage:{
        width: '100%',
        height: 220,
        backgroundColor:'black'
    },
    headingImage:{
        width:'100%',
        height:100,
    },
    carousel:{
        // position:'absolute',
        // bottom:0,
        marginTop:15,
        marginBottom:10,
    },
});


export default HomeScreen;



