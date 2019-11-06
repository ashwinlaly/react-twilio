import React, { useEffect } from 'react';

import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Select from 'antd/es/select';

import './App.css';

import Service from './Agent';

const { Option } = Select;
const { TextArea } = Input;

function App() {

  const [Phone, setPhone] = React.useState('+918778809631');
  const [Message, setMessage] = React.useState('Hello');
  const [MessageBoxVisible, setMessageBoxVisible] = React.useState(false);
  const [Process, setProcess] = React.useState('sms');

  const handleClick = () => {
    var data = {
      to : Phone
    };
    if(Process === 'sms') {
      data = {...data, message : Message }
      // console.log(data)
      Service.Twilio.Message(data)
    } else {
      Service.Twilio.Call(data)
    }
  }

  const handleActionSelect = (e) => {
    setProcess(e);
  }

  useEffect(() =>{
    if(Process === 'sms'){
      setMessageBoxVisible(false);
    }else {
      setMessageBoxVisible(true);
    }
  }, [Process])

  return (
    <div className="dialPad">
      <Input type="text" value={Phone} style={ {width: '55%', marginRight: '2%'} } onChange={(e) => setPhone(e.target.value)}/>
      <Select value={Process} style={ {width: '32%', marginRight: '2%'} } onChange={handleActionSelect}>
        <Option value="sms">SMS</Option>
        <Option value="call">Call</Option>
      </Select>
      <Button type="primary" onClick={handleClick}>Go</Button>
      <TextArea value={Message} disabled={MessageBoxVisible} onChange={(e) => setMessage(e.target.value)} style={ {width: '55%'} } placeholder="Enter a Message"/>
    </div>
  );
}

export default App;