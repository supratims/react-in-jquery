import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
    render(){
       var html = [];
        this.props.items.forEach(function(data){
           html.push(<li>{data}</li>);
        });

      return (<ul onClick={this.handleClick.bind(this)} className='list-group list-group-flush'>{html}</ul>);
    }

    handleClick(event){
      //console.log(event.target.data('test'));
      event.target.trigger('testevent');
    }
}

// ========================================


function renderItems(items_array){
    ReactDOM.render(
       <MainComponent items={items_array}/>,
       document.getElementById('items')
    );
}

renderItems(['a', 'b']);
