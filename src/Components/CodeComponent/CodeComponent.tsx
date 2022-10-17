import './CodeComponent.scss';
import Option from './Option/Option';
import { BsFillPlayFill } from 'react-icons/bs';

interface options{
    name: string,
    icon: any,
    code: string
}

function CodeComponent({title, opts} : {title: string, opts: options[]}) {
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
        {
            opts.map((opt : options, i : number) => {
                return(
                    <div className="option">
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
    );
}

export default CodeComponent;