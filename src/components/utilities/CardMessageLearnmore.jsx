import React from 'react'

function CardMessageLearnmore() {
  return (
    <>
    <style>
        {`
            .cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.cards .red {
  background-color: #f43f5e;
}

.cards .blue {
  background-color: #3b82f6;
}

.cards .green {
  background-color: #22c55e;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 10%;
  width: 210px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: .7em;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
        `}
    </style>
      <div className="cards">
              <div className="card green">
        <p className="tip">Message Us</p>
       <i class="ri-message-2-line"></i>
      </div>
     
      <div className="card blue">
        <p className="tip">Learn More</p>
    <i class="ri-arrow-right-up-fill"></i>
      </div>
 <div className="card red">
        <p className="tip">Contact Us</p>
      <i class="ri-contacts-book-2-fill"></i>
      </div>
    </div>
    </>
  )
}

export default CardMessageLearnmore