import React from 'react'
import ReactDOM, {render} from 'react-dom'
import NewsTicker from './js/components/NewsTicker'

class App extends React.Component {
    render() {
        return (
            <NewsTicker/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)