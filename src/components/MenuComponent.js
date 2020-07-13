//This import will allow to create a react component
import React, { Component } from "react";
//in order to construct menu
import { Media } from "reactstrap";


//Adding a menu component 
class Menu extends Component{
    constructor(props){
        super(props); //This is required whenever to define e class component

        this.state ={
            //this stores the properties related to this component that we can make use of
            dishes: [
                //javascript object that contains list of dishes
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ],
        }
    }

    render(){ 
        //This method will return the corresponding view for this component
        const menu=this.state.dishes.map((dish)=>{
            //map operator is going to iterate over all the dishes items (every dish)
            return(
                //this return will return layout for every dish
               // inside the div each items view will be construct
               //why we need key?
               /*whenever we construct an item,every item required a key attribute,
               These key helps react rendering the items on the screen */
               //Learn media class of reactstrap from react documentation
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">

                            <Media heading >{dish.name}</Media>
                            <p>{dish.description}</p>

                        </Media>
                    </Media>
                </div>
            )
        });
         
        return(
            //Inside this return function we will decide what to return
            //This {menu} under media class is going a display a list of item for the restaurant
           <div className="container">
               <div className="row">
                    <Media list>
                        
                            {menu}
                    </Media>
               </div>
           </div>
        );
    }
};


export default Menu; //export the component