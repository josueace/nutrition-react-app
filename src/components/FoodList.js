import React,{Component} from "react";
import FoodBox from './FoodBox';
import foods from '../foods.json';
import AddFood from './AddFood';
//import TodayList from './TodayList';




class FoodList extends Component{
    constructor(){
        super();
        this.state={
            foods:foods,
            showForm:false,
            search:'',
            list:[],
            quantity:0
        }
    }

    toggleFood(){
        this.setState({ showForm: !this.state.showForm });
    }
    

    filteredFood;

    
    addFoodList = (index) =>{
        console.log(this.filteredFood[index].name);

        const foodCopy= [...this.state.list];
        foodCopy.push(this.filteredFood[index]);
        this.setState({
            list:foodCopy
        })




    }

    addFoodHandler = (theFood) => {
        const foodsCopy = [...this.state.foods];
        foodsCopy.push(theFood);
        this.setState({
            foods: foodsCopy
        })
      }


      handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
      }

      handleQuantity =(event,index)=>{
       
        console.log(event.target.value,index);
        const foodsCopy = [...this.filteredFood];
        foodsCopy[index].quantity=event.target.value;
        this.filteredFood=foodsCopy;
        
       
    }


    render(){

     const {showForm} = this.state;


     this.filteredFood = this.state.foods.filter(food => food.name.includes(this.state.search) == true)

     let form;
     if(this.state.showForm){
         form=<AddFood addTheFood={this.addFoodHandler} />
     }else{
         form="";
     }



     let list;
     if(this.state.list.length ==0){
        list=''
     }else {
         list= this.state.list.map((food,index)=>{
         return <li key={index}>{food.quantity} {food.name} = {food.calories} cal</li>
                 })
             
         
     }




        return(
           
        <div className="list">   
     <div>
               <h1 class="iron">IronNutrition</h1>
                <form class="example" action="action_page.php">
      <input type="text" placeholder="find food" name="search" onChange={(event) => this.handleChange(event)}/>
     
    </form>
           </div>
           <div className="flex">
               <div>
      {
        this.filteredFood.map((food,index)=><FoodBox key={index} name={food.name} quantity={food.quantity} image={food.image} calories={food.calories} addFoodList ={()=> this.addFoodList(index)} handleChange={this.handleQuantity} index={index} /> )
      }
      <button onClick={() => this.toggleFood() }>
                        {showForm ? 'Hide Form' : 'Show Form'}
                    </button>
      {form}
      </div>
<div class="listy">
    <h1>Today List</h1>

{list}
    <p>Total: {this.state.list.reduce((accum,curre)=>{
        return accum + curre.calories
    },0)}</p>
</div>
    
      </div>
      
      
      </div>
        )
    }
}

export default FoodList;