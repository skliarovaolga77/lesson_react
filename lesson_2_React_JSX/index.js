const nameUs = 'Olga';
const red = {
	width: '250px',
	color: '#ff0000',
	fontSize: '40px',
	padding: '20px',
}
const button = {
	width: '250px',
	fontSize: '40px',
	padding: '20px',
}
const alertHello = () => {
	alert('hi');
}
const Hello = (props) => <button style={red} onClick={alertHello}> hello {props.name}</button>;
// const RenderJSX = () => (
// 	<div>
// 		<header>
// 			<h1>Hello Reac</h1>
// 			<Hello name="Max"/>
// 			<Hello name="Alex"/>
// 			<Hello name="Jon"/>
// 			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
// 		</header>
// 	</div>
// );
 
// ReactDOM.render(<RenderJSX/>, document.querySelector('#root'));


//классовые компоненты
class RenderJSXClass extends React.Component{
	//компоненты могут хранить состояния 
	//візовем конструктор
	constructor(){
		super();
		//создадим св-ва 
		this.state = {
			//это сотояние к-е будет хранить count
			count: 0
		}
	}
	//напишем метод к-й будет ув-ть
	changeCount = () => {
		// console.log(this);
		// обновляем state только через setState!!!!!!!!!!!!!!!!11
		this.setState({
			count: this.state.count + 1
		})
	}
	//поставим ф-цию ,к-я будет возвращать нашу верстку
	render() {
		return (
			<div>
				<header>
				<h1>Hello Reac</h1>
					<Hello name="Max"/>
					<Hello name="Alex"/>
					<Hello name="Jon"/>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
				</header>
				<button style={button} onClick={this.changeCount}>{this.state.count}</button>
			</div>
		);
	}

}


 
ReactDOM.render(<RenderJSXClass/>, document.querySelector('#root'));


