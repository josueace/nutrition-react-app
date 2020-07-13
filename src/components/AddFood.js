import React, {Component} from 'react';

class AddFood extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            calories:'',
            image:'',
            quantity:''
        }
    }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);   
        this.setState({
          title: '',
          director: '',
          hasOscars: false,
          IMDbRating: '' 
        });
          
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={(event) => this.handleChange(event)} />
      
                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={(event) => this.handleChange(event)} />
      
                <label>Image:</label>
                <input type="text" name="image" value={this.state.image} onChange={(event) => this.handleChange(event)}  />
                
                <label>Quantity:</label>
                <input type="text" name="quantity" value={this.state.quantity} onChange={(event) => this.handleChange(event)} />
                
                <input type="submit" value="Submit" />
            </form>
          </div>
        )
    }

}

export default AddFood;