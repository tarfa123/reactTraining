var Greeter = React.createClass({
render: function(){
return (
<div>
<h1> hey hey react</h1>
<p> calling from component</p>
</div>
);
}
});

ReactDOM.render(
<Greeter/>,
document.getElementById('app')
);
