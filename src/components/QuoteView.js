import React, { Component } from "react";


export default class QuoteView extends Component {
    state = {
        loading: true,
        quote: []
    }

    async componentDidMount(){
        const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
        const respons = await fetch(url);
        const data = await respons.json();
        this.setState({   
            quote: data,
            loading: false,
        })
    }

    render(){
        return(
            <div>
                {this.state.loading ? <div>loading...</div> : 
                    <div className="quote-box">"{this.state.quote.message}</div>
                }
            </div>
        )
    }
}