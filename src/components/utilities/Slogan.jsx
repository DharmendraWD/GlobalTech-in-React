import React from 'react';
import FollowUsBtn from './FollowUsBtn';
import CardMessageLearnmore from '../utilities/CardMessageLearnmore'

function Cards() {
  return (
    <>
<style>
    {`

.middlePara p{
    font-size:17px;
    cursor:default;
    font-family: Pp_Neue_Machina;
}
    `}
</style>
<div className="bannerBellowParent flex justify-around items-center">

<CardMessageLearnmore></CardMessageLearnmore>
    <div className="middlePara w-[50%]">
        <p>Global-Tech is a team of experienced IT consultants that focus on providing the quality software solutions to the organization. Global-Tech has gained a vast experience in a decade, fulfilling the exact needs of the customer by providing the most recent and up-gradable technology for unified solution in IT sector across a wide spectrum.</p>
    </div>
    <div className="rightSIde">
<FollowUsBtn></FollowUsBtn>
    </div>
    </div>
    </>

  );
}

export default Cards;
