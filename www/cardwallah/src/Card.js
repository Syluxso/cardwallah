import React from "react";

export default function Card({ card }) {
return (
    <>
      <div class="col col-12 col-sm-12 col-md-4">
        <div class="card">
          <div  class="card-body">
            <h5 class="card-title">{ card.title }</h5>
          </div>
        </div>
    
      </div>
    </>
);
}