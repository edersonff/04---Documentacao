import './Option.scss';

function Option({color} : {color: string}) {
    return (
    <div className='option-container' style={{backgroundColor: color}} />
    );
}

export default Option;