import React, {useState, useEffect} from 'react';
import ContentPanel from './ContentPanel.js';

const TabPanel = (props) => {
    const[tabContent, setTabContent] = useState('');
    const[btnToggles, setBtnToggles] = useState([]);
    
    useEffect(() =>{
        setBtnToggles(props.tabData.map(show => show.onDisplay));
    }, [props.tabData]);

    const updateTabContent = (content, index) =>{
        let counter = 0;
        const newBtnToggle = btnToggles.map(toggle => counter++ === index ? !toggle : false);
        setBtnToggles(newBtnToggle);
        setTabContent(newBtnToggle[index] ? content : '');
    }


    return( 
        <div className='row'>
            <div className='col-4'>
                <ul className="list-group">
                    {props.tabData.map(tab => {
                        const {title, id, content, on, off} = tab;
                        return(
                            <li key={id} className='list-group-item border border-primary bg-primary'>
                                <button className='btn' onClick={() => {updateTabContent(content, id)}}>
                                    <h6 className={btnToggles[id] ? off : on}><strong>{title}</strong></h6>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='col-8'>
                <ContentPanel content={tabContent} />
            </div>
        </div>
     );
}
 
export default TabPanel;