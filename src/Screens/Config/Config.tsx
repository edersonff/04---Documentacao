import './Config.scss';
import Navigation from '../../Components/Config/Navigation/Navigation';
import configList from '../../data/configList';
import { useState } from 'react';
import { store } from '../..';
import CodeInput from '../../Components/CodeInput/CodeInput';
function Config() {
    const { background } = store.getState();
    const [ color, setColor ] = useState(background.value)
    return (
    <div className='config-container ignore-container'>
        <div className="vertical">
            <div className="config-header">
                <h1 className="title">
                    {'Configurações'}
                </h1>
            </div>
            <div className="horizontal">
                <div className="navigation-config">
                        {configList.map((item, i)=>{
                            return(
                                <Navigation key={i} item={item} />
                            )
                        })}
                </div>
                <div className="config-content">
                    <div className="config-content-container">
                        <div className="view" style={{background: color}}>
                            
                        </div>
                        <CodeInput onChange={()=>{
                            store.dispatch({
                                type: 'CHANGE_BACKGROUND',
                                value: color
                            })
                        }} value={color} setValue={setColor} />
                    </div>
                    <button className="apply">
                        Aplicar
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Config;