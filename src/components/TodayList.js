import React,{Component} from 'react';


class TodayList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:props.list
        }
    }

    render(){

        let list;
        if(this.state.list.length ==0){
            list=''
        } else{
            list=  <li>hey</li>
            
        }
    return(
        <div>
            <h1>Todays List</h1>

            <ul>
                {list}
            </ul>
        </div>
    )
    }
}

export default TodayList;