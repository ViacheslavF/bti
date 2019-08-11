import React, {Fragment} from "react";
import './reacteventsource.scss';
import ReactEventSource from 'react-eventsource';

const renderEvent = event => <div className='d-inline-flex mr-1' key={event.toString()}>{ event }</div>

class Reacteventsource extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Fragment>
        <ReactEventSource className='d-flex' url="https://bti-pco-be.herokuapp.com/api/test">
            { events => events.map(renderEvent) }
        </ReactEventSource>
      </Fragment>
    )
  }
}

export default Reacteventsource;
