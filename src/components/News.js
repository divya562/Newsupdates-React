import React, {useEffect, useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from './Spinner'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const[articles, setArticles]=useState([])
  const[loading, setLoading]=useState(true)
  const[page, setPage]=useState(1)
  const[totalResults, setTotalResults]=useState(true)
  // document.title = `${this.capitalizedLetter(
  //   props.category
  // )} - NewsUpdates`;

  const capitalizedLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
 
  const updateNews=async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eee49f7388a0405cba409ed85a99dd2f&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalizedLetter(
    props.category
  )} - NewsUpdates`;
    updateNews();
  },[])
  // async componentDidMount() {
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eee49f7388a0405cba409ed85a99dd2f&page=1&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   articles: parsedData.articles ,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
  //   this.updateNews();
  // }

  const handlePreviousClick = async () => {
    // console.log("dc");
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eee49f7388a0405cba409ed85a99dd2f&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    // this.setState({ page: this.state.page - 1 });
    setPage(page-1)
    updateNews();
  };

  const handleNextClick = async () => {
    //   console.log("dcxsd");
    //   if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize)))
    //   {
    //       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eee49f7388a0405cba409ed85a99dd2f&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //       this.setState({loading: true});
    //       let data = await fetch(url);
    //       let parsedData = await data.json()

    //       this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page+1,
    //         loading: false
    //       })
    // }
    setPage(page+1)
    updateNews();
  };

   const fetchMoreData=async()=>{
    
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=eee49f7388a0405cba409ed85a99dd2f&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  }
 
    return (
      <>
       
          <h1 className="text-center" style={{ margin: "60px 0px"}}>
            NewsUpdate - Top {capitalizedLetter(props.category)}{" "}
            Headlines{" "}
          </h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
          >
           <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
         </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
            >
              {" "}
              &larr;Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
        
        
      </>
    );
  }
  
  News.defaultProps = {
    country: "in",
    pageSize: 12
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
export default News;
