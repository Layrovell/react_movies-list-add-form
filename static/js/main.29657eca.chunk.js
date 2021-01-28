(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),r=a.n(l),m=(a(15),a(9)),c=a(1),s=a(2),o=a(4),d=a(3),h=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,n=e.imgUrl,l=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:n,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},a,i.a.createElement("br",null),i.a.createElement("a",{href:l},"IMDB"))))});h.defaultProps={description:""};var p=function(e){var t=e.movies;return i.a.createElement("div",{className:"movies"},t.map((function(e){return i.a.createElement(h,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var g=a(7),u=(a(19),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",checkImgUrl:!1,checkImdbUrl:!1},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(g.a)({},n,i))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,i=a.description,l=a.imgUrl,r=a.imdbUrl,m=a.imdbId,c=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/,s=c.test(l)&&c.test(r);s&&(e.props.addMovie(n,i,l,r,m),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})),n&&i&&l&&r&&m&&s&&e.setState({checkImgUrl:!0,checkImdbUrl:!0})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.imgUrl,l=e.imdbUrl,r=e.imdbId,m=e.checkImgUrl,c=e.checkImdbUrl;return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("p",{className:"is-size-4"},"Add a new film"),i.a.createElement("div",null,i.a.createElement("input",{value:t,onChange:this.handleChange,type:"text",name:"title",placeholder:"title"}),t.length>0&&i.a.createElement("span",{className:"green-text"},"\u2713")),i.a.createElement("div",null,i.a.createElement("input",{value:a,onChange:this.handleChange,type:"text",name:"description",placeholder:"description"}),a.length>0&&i.a.createElement("span",{className:"green-text"},"\u2713")),i.a.createElement("div",null,i.a.createElement("input",{value:n,onChange:this.handleChange,type:"text",name:"imgUrl",placeholder:"imgUrl"}),m&&n.length>0?i.a.createElement("span",{className:"green-text"},"\u2713"):""),i.a.createElement("div",null,i.a.createElement("input",{value:l,onChange:this.handleChange,type:"text",name:"imdbUrl",placeholder:"imdbUrl"}),c&&l.length>0?i.a.createElement("span",{className:"green-text"},"\u2713"):""),i.a.createElement("div",null,i.a.createElement("input",{value:r,onChange:this.handleChange,type:"text",name:"imdbId",placeholder:"imdbId"}),r.length>0&&i.a.createElement("span",{className:"green-text"},"\u2713")),i.a.createElement("button",{type:"submit"},"add"))}}]),a}(n.Component)),v=a(8),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={movies:v},e.addMovie=function(t,a,n,i,l){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[{title:t,description:a,imgUrl:n,imdbUrl:i,imdbId:e.movies.length+1}])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies;return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},i.a.createElement(p,{movies:e})),i.a.createElement("div",{className:"sidebar"},i.a.createElement(u,{addMovie:this.addMovie})))}}]),a}(n.Component);r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.29657eca.chunk.js.map