import './CodeComponent.scss';
import Option from './Option/Option';
import { BsFillPlayFill } from 'react-icons/bs';
import { useState } from 'react';

interface options{
    name: string,
    icon: any,
    code: string
}

function CodeComponent({title, opts} : {title: string, opts: options[]}) {
    const [sideMenuWidth, setSideMenuWidth] = useState(0);
    let code : any = `{
        "glossary": {
            "title": "example glossary",
            "GlossDiv": {
                "title": "S",
                "GlossList": {
                    "GlossEntry": {
                        "ID": "SGML",
                        "SortAs": "SGML",
                        "GlossTerm": "Standard Generalized Markup Language",
                        "Acronym": "SGML",
                        "Abbrev": "ISO 8879:1986",
                        "GlossDef": {
                            "para": "A meta-markup language, used to create markup languages such as DocBook.",
                            "GlossSeeAlso": ["GML", "XML"]
                        },
                        "GlossSee": "markup"
                    }
                }
            }
        }
    }`;
    code = code.split(RegExp('\n', 'g'));
    return (
    <div className='codecomponent-container'>
        <div className="codecomponent-title">
            <h1 className="title">
                {title}
            </h1>
            <div className="right svg-click">
                <div className="codecomponent-options">
                    {
                        ['#BA39AD', '#3BBA39', '#3955BA', '#BA3939'].map((color, i)=>{
                            return(
                                <Option color={color} key={i} />
                            );
                        })
                    }
                </div>
                <BsFillPlayFill className='run'/>
            </div>
        </div>
        <div className="code-container">
            <div style={{width: sideMenuWidth}} className="side-container" onDrag={(e)=>{
                setSideMenuWidth(e.movementX);
            }}>
                <div className="scrollableMenu" />
            </div>
            <div className="numbers">
                {code.map((code : string, i : number) => {
                    return(
                        <p>{i}</p>
                    )
                })}
            </div>
            <div className="code">
                {code.map((code : string, i : number) => {
                    const splits = ['"', '{', '}', ':', '[', ']', ',', '(', ')'];
                    // code.split(\s+).forEach((word : string) => {
                    //     if(splits.includes(word)) {
                    //         code = code.replace(word, '<span class="split">' + word + '</span>');
                    //     }
                    // });
                    return(
                        <><pre>{code}</pre></>
                    )
                })}
            </div>
        </div>
        <div className="options">
            {
                opts.map((opt : options, i : number) => {
                    return(
                        <div className="option svg-click">
                            <div className="option-icon">
                                {opt.icon}
                            </div>
                            <div className="option-name">
                                {opt.name}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    );
}

export default CodeComponent;