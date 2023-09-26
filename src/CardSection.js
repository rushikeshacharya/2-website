import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="Card Title 1" imageURL="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>

          <div className="col-4">
            <Card title="Card title 2" cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Card>
          </div>
          <div className="col-4">
            <Card cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Card Title 3"></Card>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
