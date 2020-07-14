//This import will allow to create a react component
import React, { Component } from "react";
//in order to construct menu
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from "reactstrap";


//Adding a menu component 
class Menu extends Component{
    constructor(props){
        super(props); //This is required whenever to define e class component

        this.state ={
           selectedDish: null
        }
       
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render(){ 
        //This method will return the corresponding view for this component
        const menu=this.props.dishes.map((dish)=>{
            //map operator is going to iterate over all the dishes items (every dish)
            return(
                //this return will return layout for every dish
               // inside the div each items view will be construct
               //why we need key?
               /*whenever we construct an item,every item required a key attribute,
               These key helps react rendering the items on the screen */
               //Learn media class of reactstrap from react documentation
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                       
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                    
                        <CardImgOverlay>

                            <CardTitle >{dish.name}</CardTitle>
                            

                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
         
        return(
            //Inside this return function we will decide what to return
            //This {menu} under media class is going a display a list of item for the restaurant
           <div className="container">
               <div className="row">
                     {menu}
               </div>
               <div className="row">
                   {this.renderDish(this.state.selectedDish)}
               </div>
           </div>
        );
    }
};


export default Menu; //export the component