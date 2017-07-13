import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
    render(){
       var html = [];
        this.props.items.forEach(function(data){
           html.push(<li>{data}</li>);
        });

      return (<ul className='list-group list-group-flush'>{html}</ul>);
    }
}

// ========================================


function renderItems(items_array){
    ReactDOM.render(
       <MainComponent items={items_array}/>,
       document.getElementById('items')
    );
}
