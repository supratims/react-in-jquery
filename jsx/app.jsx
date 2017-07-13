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

var ITEMS_ARRAY = [];
ReactDOM.render(
   <MainComponent items={ITEMS_ARRAY}/>,
   document.getElementById('items')
);
