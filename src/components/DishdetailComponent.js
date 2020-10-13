import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import {Link} from 'react-router-dom';


function RenderDish({dish}){
  if (dish != null) {
    return (
      <Card>
        <CardImg src={dish.image} alt="dishImage" />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
 
  const RenderDishComments = ({dish})=>{
    if (dish != null) {
      const comments = dish.comments.map((value) => {
        return (
          <li key={value.id}>
            <div>{value.comment}</div>
            <div>
              {"-- "}
              {value.author} {" "}
              {value.date}{" "}
              ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(value.date)))}
            </div>
          </li>
        );
      });
      return (
        <div className="list-unstyled" list>
          {comments}
        </div>
      );
    } else {
      return <div></div>;
    }
  }


  
    const DishDetail = (props)=>{
      return (
        <div className="container">
           <div className='row'>
              <Breadcrumb>
                
                 <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                 <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className='col-12'>
                <h3> {props.dish.name} </h3>
                <hr />
              </div>
            </div>
          <div className="row">
            <div className="col-12 col-sm-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-sm-5 m-1">
              <ul>
                <h4>Comments</h4>
                <RenderDishComments  dish={props.comments}/>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    

export default DishDetail;