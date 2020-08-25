import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
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

  renderDishComments(dish) {
    if (dish != null) {
      const comments = dish.comments.map((value) => {
        return (
          <li key={value.id}>
            <div>{value.comment}</div>
            <div>
              {"-- "}
              {value.author} {" "}
              {value.date}{" "}
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

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-sm-5 m-1">
          <ul>
            <h4>Comments</h4>
            {this.renderDishComments(this.props.dish)}
          </ul>
        </div>
      </div>
    );
  }
}
export default DishDetail;
