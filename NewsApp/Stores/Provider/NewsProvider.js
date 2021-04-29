
import React from 'react'

import NewsContext from '../Context/NewsContext';
import axios from 'axios';


const BASE_URL='https://newsapi.org/v2'
class NewsProvider extends React.Component{
    state={
        allNews:[],
        headlines:[],
        sources:[],
        newsDetail:{},
    }


    getAllNews=async ()=>{
        const response=await axios.get(`${BASE_URL}/everything?q=bitcoin&apiKey=525a71e859ee4eb693889341bb1420bf`);
        // console.log(response.data.articles)
        this.setState({
            ...this.state,
            allNews:response.data.articles
        })
    }

    getHeadlines=async ()=>{
        try {
            const response=await axios.get(`${BASE_URL}/top-headlines?country=us&apiKey=525a71e859ee4eb693889341bb1420bf`);
            // console.log(response.data.articles)
            this.setState({
                ...this.state,
                headlines:response.data.articles
            })
        }
        catch (error){
            console.log("Headline"+error)
        }

    }

    getSources=async ()=>{
        const response=await axios.get(`${BASE_URL}/sources?apiKey=525a71e859ee4eb693889341bb1420bf`);
        // console.log(response.data.sources)
        this.setState({
            ...this.state,
            sources:response.data.sources
        })

    }

    setNewsDetail=(news)=>{
        this.setState({
            ...this.state,
            newsDetail:news,
        })
    }



    render(){
        return(
            <NewsContext.Provider value={{
                ...this.state,
                getAllNews:this.getAllNews,
                getHeadlines:this.getHeadlines,
                getSources:this.getSources,
                setNewsDetail:this.setNewsDetail,


            }}>
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export default NewsProvider;
