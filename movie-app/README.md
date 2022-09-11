API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c"

API_IMG= "https://image.tmdb.org/t/p/w500"

API_SEARCH= "https://api.themoviedb.org/3/search/movie?api_key=a3e69b3b929b911d21793d43d1d96b7c&query="

API_GIANRAH= "https://api.themoviedb.org/3/genre/movie/list?api_key=a3e69b3b929b911d21793d43d1d96b7c&language=en-US"

AT HOVER:
var Link = React.createClass({
getInitialState: function(){
return {hover: false}
},
toggleHover: function(){
this.setState({hover: !this.state.hover})
},
render: function() {
var linkStyle;
if (this.state.hover) {
linkStyle = {backgroundColor: 'red'}
} else {
linkStyle = {backgroundColor: 'blue'}
}
return(
<div>
<a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
</div>
)
}
