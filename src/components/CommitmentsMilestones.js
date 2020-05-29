import React, {useState, Fragment} from 'react';
import TabPanel from './TabPanel.js';

const CommitmentsMilestones = () => {
    const [tabs] = useState([
        {
            title: 'Walking',
            content: `The definition of walking is related to strolling or moving with the feet.
             An example of walking used as an adjective is in the phrase "a walking tour," 
             which means a tour in which people move from point a to point b using their feet.`,
            onDisplay: false,
            on: 'text-warning',
            off: 'text-white',
            id: 0
        },
        {
            title: 'Car',
            content: `A car (or automobile) is a wheeled motor vehicle used for transportation. 
            Most definitions of cars say that they run primarily on roads, seat one to eight people, 
            have four tires, and mainly transport people rather than goods. Cars came into global use 
            during the 20th century, and developed economies depend on them.`,
            onDisplay: false,
            on: 'text-warning',
            off: 'text-white',
            id: 1
        },
        {
            title: 'Motorcycle',
            content: `A motorcycle, often called a motorbike, bike, or cycle, is a 
            two- or three-wheeled motor vehicle. Motorcycle design varies greatly 
            to suit a range of different purposes: long distance travel, commuting, 
            cruising, sport including racing, and off-road riding.`,
            onDisplay: false,
            on: 'text-warning',
            off: 'text-white',
            id: 2
        },
        {
            title: 'Airplance',
            content: `An airplane or aeroplane (informally plane) is a powered, 
            fixed-wing aircraft that is propelled forward by thrust from a jet engine, 
            propeller or rocket engine. ... Most airplanes are flown by a pilot on board 
            the aircraft, but some are designed to be remotely or computer-controlled such as drones.`,
            onDisplay: false,
            on: 'text-warning',
            off: 'text-white',
            id: 3
        }
      ]);
      
    return ( 
        <Fragment>
            <TabPanel tabData={tabs} />
        </Fragment>
     );
}
 
export default CommitmentsMilestones;