import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import './News.css'

export class Newsss extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
      page: 1,
      totalResult: 0,
    };
    
  }
//order of calling
//constructor then render then componentDidMount
  async updatenews() {
   
    let url = `https://newsapi.org/v2/everything?q=agriculture&apiKey=eec7ed24a15d41aa9466b15f1ba20fac&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url); //fetch return promise
   
    let parse = await data.json();
    

    this.setState({
      article: parse.articles,
      totalResult: parse.totalResults,
      loading: false,
    });
    
  }

  async componentDidMount() {
    this.updatenews();
  }

  fetchMoreData= async()=> {
    
    let url = `https://newsapi.org/v2/everything?q=agriculture&apiKey=eec7ed24a15d41aa9466b15f1ba20fac&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
    this.setState({page:this.state.page +  1})
    let data = await fetch(url); //fetch return promise
    
    let parse = await data.json();
    

    this.setState({
      article: this.state.article.concat(parse.articles),
      totalResult: parse.totalResults,
      
    });
  }

  render() {
    return (
      <div className="news-bg m-0">
        <h1 className="text-center p-4 ">
         <div className="flex align-middle justify-center m-2"><img src={require('./sprout_1635309.png')} alt="" className="h-8 w-8"/> <h1 className="text-lg sm:text-3xl">Agriculture News</h1></div>
        </h1>

        {this.state.loading && <Spin />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResult}
          loader={<Spin />}
        >
          <div className="container  ">
          <div className="row my-3 ">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4  " key={element.url}>
                  <NewsItem
                    title={element.title?element.title.slice(0, 40) : ""}
                    description={element.description ? element.description.slice(0, 150) : ""}
                    ImageUrl={
                      !element.urlToImage
                        ? "https://img.etimg.com/thumb/msid-102413530,width-1070,height-580,imgsize-605584,overlay-etmarkets/photo.jpg"
                        : element.urlToImage
                    }
                    NewsUrl={element.url}
                    badge={element.source.name}
                    author={element.author}
                    time={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
       

      </div>
    );
  }
}

export default Newsss;
