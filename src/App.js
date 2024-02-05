import './App.css';
import {DatePicker} from 'antd';

function App() {
  return (
    <div className='App'>
      <div className='form'>
        <p>Date picker without customization</p>
        <DatePicker.RangePicker className='datePicker'></DatePicker.RangePicker>
        <p>Date picker with input width customization</p>
        <DatePicker.RangePicker className='datePickerCustom'></DatePicker.RangePicker>
      </div>
    </div>
  );
}

export default App;
