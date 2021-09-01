import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const [time, setTime] = useState(0)
    setTimeout(() => { setTime(time + 1) }, 100)

    let minutes = Math.trunc(time/60)
    return (
        <div>
            <h1>Hello World!</h1>
            {minutes}:{time%60}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)